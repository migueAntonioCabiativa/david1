'use strict'

let MLUtility = {
    startWatchTime: function () {
        return new Date();
    },

    GET: async function (url) {
        let result = await fetch(url, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        let response = await result.json();

        return response;
    },

    POST: async function (url, data) {
        /*
        let data = {
            TaskName: 'preguntar Johan',
            TaskDescription: 'jaaa',
            Priority: '2',
            Status: '1',
            Labels: '1,2',
            Person: '1' 
        }
        */
        let result = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        let response = await result.json();

        return response;
    },

    PUT: async function (url, data) {
        /*
        let data = {
            TaskName: 'preguntar Johan',
            TaskDescription: 'jaaa',
            Priority: '2',
            Status: '1',
            Labels: '1,2',
            Person: '1' 
        }
        */
        let result = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        return result;
    },

    DELETE: async function (url, taskId) {

        let data = {
            taskId: taskId
        }

        let result = await fetch(url, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });

        return result;
    }
}