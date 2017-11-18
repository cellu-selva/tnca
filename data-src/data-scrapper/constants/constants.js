'use strict';

module.exports = {
    host: 'http://www.tnca.cricket/',
    db: {
        url: 'mongodb://localhost:27017/tnca_raw_data',
        host: 'mongodb://localhost:',
        port: 27017,
        dbName: '/tnca_raw_data'
    },
    matchSquad: {
        path1: 'feeds/',
        path2: '-squad.js',
        start: 861, 
        end: 4163
    },
    matchSummary: {
        path1: 'feeds/',
        path2: '-matchsummary.js',
        start: 2000, 
        end: 4163
    },
    competitionList: {
        path1: 'feeds/competition.js',
    },
    competitionSummary: {
        path1: 'feeds/',
        path2: '-matchschedule.js',
        start: 1,
        end: 119
    },
    playerInningsScore: {

    },
    competitionTeamlist: {
        path1: 'feeds/stats/',
        path2: '-teamlist.js',
        start: 1,
        end: 119
    },
    teamStands: {
        path1: 'feeds/stats/',
        path2: '-groupstandings.js',
        start: 1,
        end: 119
    }
}
