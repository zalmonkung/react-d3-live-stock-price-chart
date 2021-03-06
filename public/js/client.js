'use strict';

var socket = io.connect('http://localhost:4000'); // jshint ignore:line
var quoteList = ['SIRI',
    'CSCO',
    'FB',
    'APPL',
    'MSFT',
    'ATVI',
    'MU',
    'INTC',
    'QQQ',
    'FTR',
    'PDCO',
    'HBAN',
    'XIV',
    'SYMC',
    'CMCSA',
    'DLTR',
    'GRPN',
    'CTSH',
    'SPLS',
    'SBUX'
];

$(document).ready(function() {
    socket.emit('fetchQuotes', quoteList);
    socket.on('updateQuotes', function(response) {
        console.log('Response: ', response);
    });
});

var chart = c3.generate({
    bindTo: '#chart',
    data: {
        x: 'x',
        xFormat: '%H:%M:%S', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', "16:00:00",
                "16:01:00",
                "16:02:00",
                "16:03:00",
                "16:04:00",
                "16:05:00",
                "16:06:00",
                "16:07:00",
                "16:08:00",
                "16:09:00",
                "16:10:00",
                "16:11:00",
                "16:12:00",
                "16:13:00",
                "16:14:00",
                "16:15:00",
                "16:16:00",
                "16:17:00",
                "16:18:00",
                "16:19:00",
                "16:20:00",
                "16:21:00",
                "16:22:00",
                "16:23:00",
                "16:24:00",
                "16:25:00",
                "16:26:00",
                "16:27:00",
                "16:28:00",
                "16:29:00",
                "16:30:00",
                "16:31:00",
                "16:32:00",
                "16:33:00",
                "16:34:00",
                "16:35:00",
                "16:36:00",
                "16:37:00",
                "16:38:00",
                "16:39:00",
                "16:40:00",
                "16:41:00",
                "16:42:00",
                "16:43:00",
                "16:44:00",
                "16:45:00",
                "16:46:00",
                "16:47:00",
                "16:48:00",
                "16:49:00",
                "16:50:00",
                "16:51:00",
                "16:52:00",
                "16:53:00",
                "16:54:00",
                "16:55:00",
                "16:56:00",
                "16:57:00",
                "16:58:00",
                "16:59:00",
                "17:00:00",
                "17:01:00",
                "17:02:00",
                "17:03:00",
                "17:04:00",
                "17:05:00",
                "17:06:00",
                "17:07:00",
                "17:08:00",
                "17:09:00",
                "17:10:00",
                "17:11:00",
                "17:12:00",
                "17:13:00",
                "17:14:00",
                "17:15:00",
                "17:16:00",
                "17:17:00",
                "17:18:00",
                "17:19:00",
                "17:20:00",
                "17:21:00",
                "17:22:00",
                "17:23:00",
                "17:24:00",
                "17:25:00",
                "17:26:00",
                "17:27:00",
                "17:28:00",
                "17:29:00",
                "17:30:00",
                "17:31:00",
                "17:32:00",
                "17:33:00",
                "17:34:00",
                "17:35:00",
                "17:36:00",
                "17:37:00",
                "17:38:00",
                "17:39:00",
                "17:40:00",
                "17:41:00",
                "17:42:00",
                "17:43:00",
                "17:44:00",
                "17:45:00",
                "17:46:00",
                "17:47:00",
                "17:48:00",
                "17:49:00",
                "17:50:00",
                "17:51:00",
                "17:52:00",
                "17:53:00",
                "17:54:00",
                "17:55:00",
                "17:56:00",
                "17:57:00",
                "17:58:00",
                "17:59:00",
                "18:00:00"
            ],
            // ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['symbol-1', 522,
                999,
                890,
                428,
                378,
                661,
                473,
                872,
                953,
                993,
                684,
                151,
                348,
                974,
                189,
                438,
                716,
                489,
                601,
                853,
                40,
                956,
                290,
                843,
                218,
                29,
                898,
                849,
                905,
                273,
                939,
                482,
                151,
                406,
                641,
                564,
                372,
                394,
                807,
                818,
                575,
                389,
                540,
                84,
                603,
                530,
                892,
                232,
                808,
                910,
                932,
                346,
                629,
                301,
                750,
                685,
                775,
                384,
                348,
                516,
                105,
                697,
                519,
                898,
                346,
                454,
                126,
                975,
                302,
                871,
                319,
                347,
                141,
                880,
                705,
                522,
                877,
                160,
                486,
                698,
                316,
                897,
                973,
                178,
                807,
                890,
                178,
                210,
                816,
                618,
                205,
                203,
                61,
                562,
                773,
                435,
                608,
                970,
                88,
                753,
                483,
                673,
                701,
                944,
                349,
                710,
                406,
                702,
                467,
                948,
                35,
                398,
                85,
                891,
                763,
                99,
                744,
                306,
                467,
                508,
                377
            ],
            ['symbol-2', 675,
                905,
                328,
                979,
                582,
                653,
                522,
                111,
                235,
                857,
                354,
                681,
                399,
                283,
                24,
                920,
                972,
                266,
                470,
                448,
                582,
                226,
                956,
                188,
                532,
                454,
                65,
                90,
                489,
                251,
                619,
                709,
                442,
                554,
                475,
                61,
                913,
                618,
                951,
                224,
                586,
                379,
                452,
                738,
                685,
                524,
                589,
                706,
                888,
                513,
                798,
                31,
                580,
                948,
                310,
                372,
                632,
                110,
                832,
                727,
                172,
                502,
                552,
                614,
                899,
                826,
                60,
                296,
                15,
                638,
                422,
                621,
                677,
                542,
                593,
                352,
                733,
                886,
                678,
                980,
                41,
                155,
                897,
                557,
                506,
                478,
                263,
                899,
                987,
                152,
                203,
                281,
                359,
                900,
                781,
                454,
                459,
                353,
                193,
                569,
                912,
                959,
                566,
                426,
                848,
                334,
                496,
                976,
                988,
                710,
                648,
                218,
                803,
                36,
                383,
                674,
                566,
                861,
                319,
                299,
                534
            ]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%H:%M:%S'
            }
        }
    }
});

setTimeout(function() {
    chart.load({
        columns: [
            ['symbol-3', 539,
                334,
                472,
                124,
                728,
                221,
                718,
                511,
                619,
                722,
                474,
                219,
                678,
                726,
                97,
                126,
                944,
                972,
                930,
                159,
                553,
                491,
                274,
                310,
                122,
                21,
                268,
                356,
                402,
                240,
                373,
                841,
                986,
                315,
                772,
                112,
                924,
                921,
                670,
                366,
                756,
                430,
                479,
                704,
                681,
                896,
                321,
                708,
                125,
                799,
                492,
                631,
                266,
                816,
                945,
                663,
                862,
                846,
                215,
                548,
                877,
                535,
                567,
                891,
                293,
                753,
                813,
                937,
                828,
                418,
                354,
                104,
                198,
                511,
                828,
                598,
                701,
                840,
                243,
                676,
                316,
                95,
                763,
                348,
                381,
                812,
                422,
                428,
                466,
                828,
                76,
                671,
                162,
                946,
                139,
                91,
                781,
                384,
                927,
                177,
                547,
                291,
                396,
                728,
                778,
                812,
                622,
                975,
                553,
                662,
                498,
                309,
                147,
                735,
                479,
                551,
                549,
                589,
                483,
                879,
                478
            ]
        ]
    });
}, 1000);
