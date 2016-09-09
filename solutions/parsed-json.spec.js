(() => {
    describe("Parsed JSON to Relational Array", () => {

        const apiData = `[{ "alternateName": null, "scheduledDateId": "a0Xi000000GIEzhEAH", "name": "MODERN FAMILY", "airTime": "09/07/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/23/2015", "seasonEndDate": "09/21/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0Xi000000GIEziEAH", "name": "MODERN FAMILY", "airTime": "09/14/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/23/2015", "seasonEndDate": "09/21/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRKEAY", "name": "MODERN FAMILY", "airTime": "09/21/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRLEAY", "name": "MODERN FAMILY", "airTime": "09/28/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRMEAY", "name": "MODERN FAMILY", "airTime": "10/05/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRNEAY", "name": "MODERN FAMILY", "airTime": "10/12/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }]`; //eslint-disable-line

        function getSeasons(data) {
            let seasonStartDates = [];
            for (let entry of data) {
                const {seasonStartDate} = entry;
                seasonStartDates = [...seasonStartDates, seasonStartDate];
            }
            const uniqueStartDates = seasonStartDates.filter((x, i, a) => a.indexOf(x) >= i);
            return {};
        }

        it("static json", () => {
            const data = JSON.parse(apiData);
            getSeasons(data);


        });
    });
})();