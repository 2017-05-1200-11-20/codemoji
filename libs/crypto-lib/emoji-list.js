/*
 * UMD definition
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.EmojiList = factory();
  }
}(this, function () {
 
  var emojis = [8986,8987,9200,9203,9728,9729,9742,9748,9749,9757,9786,9824,9827,9829,9830,9832,9875,9889,9917,9918,9924,9925,9962,9970,9971,9973,9978,9981,9992,9993,9994,9995,9996,9999,10002,10024,10052,10084,11088,126980,127183,127744,127745,127746,127747,127748,127749,127750,127751,127752,127753,127754,127755,127756,127757,127758,127759,127760,127762,127763,127764,127765,127766,127767,127768,127769,127770,127771,127772,127773,127774,127775,127776,127792,127793,127794,127795,127796,127797,127799,127800,127801,127802,127803,127804,127805,127806,127807,127808,127809,127810,127811,127812,127813,127814,127815,127816,127817,127818,127819,127820,127821,127822,127823,127824,127825,127826,127827,127828,127829,127830,127831,127832,127833,127834,127835,127836,127837,127838,127839,127840,127841,127842,127843,127844,127845,127846,127847,127848,127849,127850,127851,127852,127853,127854,127855,127856,127857,127858,127859,127860,127861,127862,127863,127864,127865,127866,127867,127868,127872,127873,127874,127875,127876,127877,127878,127879,127880,127881,127882,127883,127884,127885,127886,127887,127888,127889,127890,127891,127904,127905,127906,127907,127908,127909,127911,127912,127913,127914,127915,127916,127917,127918,127919,127920,127921,127922,127923,127924,127925,127926,127927,127928,127929,127930,127931,127932,127933,127934,127935,127936,127938,127939,127940,127942,127943,127944,127945,127946,127968,127969,127970,127971,127972,127973,127974,127976,127977,127978,127979,127980,127981,127982,127983,127984,128000,128001,128002,128003,128004,128005,128006,128007,128008,128009,128010,128011,128012,128013,128014,128015,128016,128017,128018,128019,128020,128021,128022,128023,128024,128025,128026,128027,128028,128029,128030,128031,128032,128033,128034,128035,128036,128037,128038,128039,128040,128041,128042,128043,128044,128045,128046,128047,128048,128049,128050,128051,128052,128053,128054,128055,128056,128057,128058,128059,128060,128061,128062,128064,128066,128067,128068,128069,128070,128071,128072,128073,128074,128075,128076,128077,128078,128079,128080,128081,128082,128083,128084,128085,128086,128087,128088,128089,128090,128091,128092,128093,128094,128095,128096,128097,128098,128099,128101,128102,128103,128104,128105,128107,128108,128109,128110,128111,128112,128113,128114,128115,128116,128117,128118,128119,128120,128121,128122,128123,128124,128125,128126,128127,128128,128129,128130,128131,128132,128133,128134,128135,128136,128139,128140,128141,128142,128143,128144,128145,128146,128147,128148,128149,128150,128151,128152,128153,128154,128155,128156,128157,128158,128159,128161,128162,128163,128164,128165,128166,128167,128168,128169,128170,128171,128172,128173,128174,128176,128179,128180,128181,128182,128183,128184,128185,128186,128187,128188,128189,128190,128191,128192,128195,128196,128209,128210,128211,128212,128213,128214,128215,128216,128217,128218,128220,128221,128222,128223,128224,128225,128226,128227,128228,128229,128230,128231,128232,128233,128234,128235,128236,128237,128238,128239,128240,128241,128242,128247,128249,128250,128251,128252,128263,128264,128265,128266,128267,128268,128269,128270,128276,128277,128278,128293,128294,128300,128301,128507,128508,128509,128510,128512,128513,128514,128515,128516,128517,128518,128519,128520,128521,128522,128523,128524,128525,128526,128527,128528,128529,128530,128531,128532,128533,128534,128535,128536,128537,128538,128539,128540,128541,128542,128543,128544,128545,128546,128547,128548,128549,128550,128551,128552,128553,128554,128555,128556,128557,128558,128559,128560,128561,128562,128563,128564,128565,128566,128567,128568,128569,128570,128571,128572,128573,128574,128575,128576,128581,128582,128583,128584,128585,128586,128587,128588,128589,128590,128640,128641,128642,128643,128644,128645,128646,128647,128648,128649,128650,128651,128652,128653,128654,128655,128656,128657,128658,128659,128660,128661,128662,128663,128664,128665,128666,128667,128668,128669,128670,128671,128672,128673,128674,128675,128676,128677,128678,128679,128680,128682,128690,128692,128693,128694,128701,128703,128704,128705]

  // console.log('total emojis: ' + emojis.length)

  return emojis
}));
