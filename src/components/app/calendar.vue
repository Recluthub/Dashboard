<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Calendar</h5>

                <ul class="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                    <li class="inline-block capitalize text-[14px] font-bold duration-500 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><router-link to="/">Techwind</router-link></li>
                    <li class="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i class="uil uil-angle-right-b"></i></li>
                    <li class="inline-block capitalize text-[14px] font-bold text-indigo-600 dark:text-white" aria-current="page">Calendar</li>
                </ul>
            </div>

            <div class="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-2">
                <div class="xl:col-span-2 lg:col-span-4">
                    <div id="external-events">
                        <div class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                            <span class="h6 font-semibold">All Events</span>
                        
                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                <div class="fc-event-main py-1 px-2">Metting</div>
                            </div>
                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                <div class="fc-event-main py-1 px-2">Operations</div>
                            </div>
                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                <div class="fc-event-main py-1 px-2">Lunch</div>
                            </div>
                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                <div class="fc-event-main py-1 px-2">Conference</div>
                            </div>
                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event m-1 cursor-pointer bg-indigo-600">
                                <div class="fc-event-main py-1 px-2">Business Metting</div>
                            </div>
                        
                            <div class="mt-2">
                                <div class="flex items-center mb-0">
                                    <input class="form-checkbox size-4 appearance-none rounded border border-gray-200 dark:border-gray-800 accent-indigo-600 checked:appearance-auto dark:accent-indigo-600 focus:border-indigo-300 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="drop-remove">
                                    <label class="form-checkbox-label text-slate-400" for="drop-remove">Remove after drop</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="xl:col-span-10 lg:col-span-8">
                    <div id="calendar-container" class="rounded-md shadow-sm dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                        <FullCalendar :options='calendarOptions' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    businessHours: true, // display business hours
    editable: true,
    headerToolbar: {
        left: 'prev,next today addEventButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    customButtons: {
        addEventButton: {
            text: 'Add Event',
            click: function () {
                var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                var date = new Date(dateStr + 'T00:00:00'); // will be in local time

                if (!isNaN(date.valueOf())) { // valid?
                    this.calendar.addEvent({
                        title: 'dynamic event',
                        start: date,
                        allDay: true
                    });
                    alert('Great. Now, update your database...');
                } else {
                    alert('Invalid date.');
                }
            }
        }
    },
    events: [
        {
            title: 'Business Lunch',
            start: '2023-08-03T13:00:00',
            constraint: 'businessHours'
        },
        {
            title: 'Meeting',
            start: '2023-08-13T11:00:00',
            constraint: 'availableForMeeting', // defined below
            color: '#53c797'
        },
        {
            title: 'Conference',
            start: '2023-08-18',
            end: '2023-08-20'
        },
        {
            title: 'Party',
            start: '2023-08-29T20:00:00'
        },
    ],
}
</script>
