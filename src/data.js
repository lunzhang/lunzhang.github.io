const networkNodes = {
  1:{x:134,y:331,neighbors:[49],size:2.6478250228580493,lineWidth:0.050405026388588394,id:1},
  2:{x:443,y:390,neighbors:[34,40,34],size:1.544057898232433,lineWidth:0.054926515181942034,id:2},
  3:{x:1081,y:101,neighbors:[17,1,25],size:1.6531964835911017,lineWidth:0.051062049515344985,id:3},
  4:{x:1328,y:332,neighbors:[32,32],size:1.2547464378193998,lineWidth:0.05876127476525392,id:4},
  5:{x:329,y:52,neighbors:[12],size:2.4498547197527563,lineWidth:0.057250339977250056,id:5},
  6:{x:1034,y:532,neighbors:[32],size:2.8409581270324016,lineWidth:0.051331433988159995,id:6},
  7:{x:706,y:262,neighbors:[6,21],size:2.2787614255960262,lineWidth:0.07980964369212173,id:7},
  8:{x:1125,y:356,neighbors:[22,41],size:1.179373331063934,lineWidth:0.05235388235821464,id:8},
  9:{x:1101,y:245,neighbors:[36],size:1.1185397739968699,lineWidth:0.06320439089330074,id:9},
  10:{x:1277,y:323,neighbors:[12],size:2.8783147944449508,lineWidth:0.052768908478802404,id:10},
  11:{x:531,y:400,neighbors:[29,42],size:1.9540393278812975,lineWidth:0.05544779951899007,id:11},
  12:{x:1216,y:246,neighbors:[46],size:2.597741075323691,lineWidth:0.057626882366057093,id:12},
  13:{x:223,y:620,neighbors:[26],size:2.6847756850484226,lineWidth:0.05343476420128275,id:13},
  14:{x:1466,y:452,neighbors:[36,37],size:2.7437476092908177,lineWidth:0.05590684347200248,id:14},
  15:{x:818,y:468,neighbors:[38],size:2.653984477604231,lineWidth:0.06955469644447151,id:15},
  16:{x:345,y:661,neighbors:[28,11],size:1.6720259573899394,lineWidth:0.05483523029045665,id:16},
  17:{x:868,y:232,neighbors:[13,29,10],size:1.7967970600254937,lineWidth:0.058810515130236896,id:17},
  18:{x:1387,y:647,neighbors:[32,23],size:2.4957303126478068,lineWidth:0.050812982073541263,id:18},
  19:{x:191,y:471,neighbors:[20],size:2.338995071016659,lineWidth:0.050130732536092577,id:19},
  20:{x:627,y:604,neighbors:[46,17],size:1.411510731021878,lineWidth:0.05196300527835962,id:20},
  21:{x:813,y:102,neighbors:[19,32],size:1.0994847320366015,lineWidth:0.06220927006720304,id:21},
  22:{x:401,y:209,neighbors:[7,45],size:2.1928083967822394,lineWidth:0.05309701139561979,id:22},
  23:{x:9,y:708,neighbors:[25,33,36],size:2.3640085762983927,lineWidth:0.05535793368402837,id:23},
  24:{x:427,y:716,neighbors:[17],size:1.8837295511328622,lineWidth:0.059173647043955916,id:24},
  25:{x:1497,y:502,neighbors:[24,19],size:2.3432048736800035,lineWidth:0.05200499928434857,id:25},
  26:{x:1339,y:82,neighbors:[3,48,32],size:1.5294338222893962,lineWidth:0.053748357089473888,id:26},
  27:{x:1324,y:481,neighbors:[24,6],size:2.4372930069921286,lineWidth:0.05532064982121418,id:27},
  28:{x:655,y:331,neighbors:[32],size:2.486509038406434,lineWidth:0.05682889971296686,id:28},
  29:{x:963,y:741,neighbors:[40,42,25],size:2.356806454040014,lineWidth:0.054085774963105086,id:29},
  30:{x:1153,y:686,neighbors:[25,36,50],size:1.103289281577411,lineWidth:0.07564910371426029,id:30},
  31:{x:364,y:458,neighbors:[42],size:2.513831460922243,lineWidth:0.05173350926447966,id:31},
  32:{x:1484,y:278,neighbors:[50],size:1.7968172967307012,lineWidth:0.058098203090113922,id:32},
  33:{x:968,y:17,neighbors:[22,44,29],size:1.4240023274146885,lineWidth:0.0536725760064703,id:33},
  34:{x:1207,y:451,neighbors:[25,30,18],size:1.1111763981813216,lineWidth:0.054006991782066624,id:34},
  35:{x:25,y:32,neighbors:[45,4],size:1.38326136217596,lineWidth:0.06292567868691451,id:35},
  36:{x:773,y:526,neighbors:[29,19,41],size:2.663495586327053,lineWidth:0.0648437843753544,id:36},
  37:{x:1506,y:241,neighbors:[39,5,47],size:1.72400311850358,lineWidth:0.056913280284282356,id:37},
  38:{x:203,y:774,neighbors:[11,32],size:2.738932823290945,lineWidth:0.06686916777811645,id:38},
  39:{x:294,y:434,neighbors:[49,28],size:1.5155113042244261,lineWidth:0.05280798831922479,id:39},
  40:{x:1489,y:692,neighbors:[26,10],size:1.4659859874360466,lineWidth:0.07339585739395592,id:40},
  41:{x:610,y:756,neighbors:[31],size:1.8644936632798363,lineWidth:0.05239407843810207,id:41},
  42:{x:694,y:189,neighbors:[37],size:1.4958482990751665,lineWidth:0.05565707694353045,id:42},
  43:{x:141,y:165,neighbors:[18],size:2.046620974457826,lineWidth:0.091816568963071242,id:43},
  44:{x:1265,y:758,neighbors:[14,22],size:2.9884715541453986,lineWidth:0.06026724598245911,id:44},
  45:{x:465,y:554,neighbors:[42,34],size:1.892453122316661,lineWidth:0.059721264611468074,id:45},
  46:{x:40,y:584,neighbors:[24],size:1.7591576909676339,lineWidth:0.054720789816063355,id:46},
  47:{x:1407,y:75,neighbors:[15,42],size:2.891405959258494,lineWidth:0.05892582868017503,id:47},
  48:{x:686,y:714,neighbors:[27,41],size:1.1464588326760805,lineWidth:0.057775982863475274,id:48},
  49:{x:865,y:126,neighbors:[15,39],size:1.6669840013533057,lineWidth:0.054832754006335365,id:49},
  50:{x:481,y:118,neighbors:[46],size:2.1989957589177647,lineWidth:0.05324560109221541,id:50}
};

export {networkNodes};