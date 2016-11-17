/* eslint-disable */
// Work in progress
import { expect } from 'chai';
(() => {
    describe('Parsed JSON to Relational Array', () => {

        const apiData = `[{ "alternateName": null, "scheduledDateId": "a0Xi000000GIEzhEAH", "name": "MODERN FAMILY", "airTime": "09/07/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/23/2015", "seasonEndDate": "09/21/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0Xi000000GIEziEAH", "name": "MODERN FAMILY", "airTime": "09/14/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/23/2015", "seasonEndDate": "09/21/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRKEAY", "name": "MODERN FAMILY", "airTime": "09/21/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRLEAY", "name": "MODERN FAMILY", "airTime": "09/28/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRMEAY", "name": "MODERN FAMILY", "airTime": "10/05/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }, { "alternateName": null, "scheduledDateId": "a0X170000029dRNEAY", "name": "MODERN FAMILY", "airTime": "10/12/2016", "startTime": "9:00:00 PM", "endTime": "9:31:00 PM", "seasonStartDate": "09/21/2016", "seasonEndDate": "10/12/2016", "DayOfWeek": "Wednesday" }]`; //eslint-disable-line

        function getSeasons(data) {
            let seasonStartDates = [];
            for (let entry of data) {
                const {seasonStartDate, seasonEndDate} = entry;
                seasonStartDates = [...seasonStartDates, seasonStartDate, seasonEndDate];
            }
            const uniqueStartDates = seasonStartDates.filter((x, i, a) => a.indexOf(x) >= i);

            let seasons = [];
            for (let i = 0; i < uniqueStartDates.length - 1; i++) {
                let season = {
                    startDate: uniqueStartDates[i],
                    endDate: uniqueStartDates[i + 1]
                };
                seasons = [...seasons, season];
            }
            return seasons;
        }

        function getPrograms(data, seasonStartDate) {
            let programsForSeason = data.filter(entry => entry.seasonStartDate === seasonStartDate);
            let programNames = programsForSeason.map(program => program.name)
                .filter((x, i, a) => a.indexOf(x) >= i);

            let programs = [];
            for (let programName of programNames) {
                let firstMatchingProgram = data.filter(entry => entry.name === programName)[0];
                let program = {
                    name: firstMatchingProgram.name,
                    alternateName: firstMatchingProgram.alternateName,
                    schedule: []
                };
                programs = [...programs, program];
            }
            return programs;
        }

        it('static json', () => {
            const expected = {
                seasons: [
                    {
                        startDate: '9/23/2015',
                        endDate: '9/21/2016',
                        programs: [
                            {
                                name: 'MODERN FAMILY',
                                alternateName: null,
                                schedule: [
                                    {
                                        dateId: 'a0Xi000000GIEzhEAH',
                                        airTime: '09/07/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    },
                                    {
                                        dateId: 'a0Xi000000GIEziEAH',
                                        airTime: '09/14/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        startDate: '9/21/2016',
                        endDate: '10/12/2016',
                        programs: [
                            {
                                name: 'MODERN FAMILY',
                                alternateName: null,
                                schedule: [
                                    {
                                        dateId: 'a0X170000029dRKEAY',
                                        airTime: '09/21/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    },
                                    {
                                        dateId: 'a0X170000029dRLEAY',
                                        airTime: '09/28/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    },
                                    {
                                        dateId: 'a0X170000029dRMEAY',
                                        airTime: '10/05/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    },
                                    {
                                        dateId: 'a0X170000029dRNEAY',
                                        airTime: '10/12/2016',
                                        dayOfWeek: 'Wednesday',
                                        startTime: '9:00:00 PM',
                                        endTime: '9:31:00 PM'

                                    }
                                ]
                            }
                        ]
                    }
                ]
            };

            const data = JSON.parse(apiData);
            const seasons = getSeasons(data);
            let actual = { seasons };
            getPrograms(data, seasons[0].startDate);


        });
    });
})();