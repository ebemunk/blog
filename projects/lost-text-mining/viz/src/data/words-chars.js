/*
select
	season,
	episode,
	scene,
	sum(array_length(regexp_split_to_array(line, '\s'),1)) as words,
	sum(length(line)) as chars
from dialog
where type='dialog'
group by season, episode, scene
order by season, episode, scene
*/
export default [
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 1,
		"words" : 306,
		"chars" : 1564
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 2,
		"words" : 120,
		"chars" : 581
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 3,
		"words" : 37,
		"chars" : 182
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 4,
		"words" : 212,
		"chars" : 1008
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 5,
		"words" : 114,
		"chars" : 552
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 6,
		"words" : 172,
		"chars" : 875
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 7,
		"words" : 129,
		"chars" : 684
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 8,
		"words" : 85,
		"chars" : 464
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 9,
		"words" : 184,
		"chars" : 928
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 10,
		"words" : 170,
		"chars" : 890
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 11,
		"words" : 43,
		"chars" : 209
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 12,
		"words" : 4,
		"chars" : 20
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 13,
		"words" : 220,
		"chars" : 1195
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 14,
		"words" : 105,
		"chars" : 485
	},
	{
		"season" : 1,
		"episode" : 1,
		"scene" : 15,
		"words" : 45,
		"chars" : 222
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 1,
		"words" : 82,
		"chars" : 455
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 2,
		"words" : 86,
		"chars" : 440
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 3,
		"words" : 100,
		"chars" : 481
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 4,
		"words" : 67,
		"chars" : 335
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 5,
		"words" : 252,
		"chars" : 1268
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 6,
		"words" : 78,
		"chars" : 417
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 7,
		"words" : 7,
		"chars" : 27
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 8,
		"words" : 269,
		"chars" : 1327
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 9,
		"words" : 387,
		"chars" : 1993
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 10,
		"words" : 10,
		"chars" : 53
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 11,
		"words" : 249,
		"chars" : 1305
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 12,
		"words" : 128,
		"chars" : 656
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 13,
		"words" : 155,
		"chars" : 787
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 14,
		"words" : 325,
		"chars" : 1536
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 15,
		"words" : 124,
		"chars" : 668
	},
	{
		"season" : 1,
		"episode" : 2,
		"scene" : 16,
		"words" : 470,
		"chars" : 2594
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 1,
		"words" : 80,
		"chars" : 428
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 2,
		"words" : 366,
		"chars" : 1956
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 3,
		"words" : 108,
		"chars" : 549
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 4,
		"words" : 82,
		"chars" : 397
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 5,
		"words" : 173,
		"chars" : 874
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 6,
		"words" : 243,
		"chars" : 1269
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 7,
		"words" : 141,
		"chars" : 764
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 8,
		"words" : 152,
		"chars" : 760
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 9,
		"words" : 108,
		"chars" : 480
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 10,
		"words" : 63,
		"chars" : 300
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 11,
		"words" : 171,
		"chars" : 829
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 12,
		"words" : 120,
		"chars" : 584
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 13,
		"words" : 101,
		"chars" : 503
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 15,
		"words" : 168,
		"chars" : 807
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 16,
		"words" : 69,
		"chars" : 377
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 17,
		"words" : 238,
		"chars" : 1145
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 19,
		"words" : 2,
		"chars" : 10
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 20,
		"words" : 252,
		"chars" : 1196
	},
	{
		"season" : 1,
		"episode" : 3,
		"scene" : 21,
		"words" : 94,
		"chars" : 442
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 2,
		"words" : 62,
		"chars" : 333
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 3,
		"words" : 232,
		"chars" : 1261
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 4,
		"words" : 536,
		"chars" : 2750
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 5,
		"words" : 73,
		"chars" : 391
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 6,
		"words" : 482,
		"chars" : 2493
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 7,
		"words" : 47,
		"chars" : 264
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 8,
		"words" : 239,
		"chars" : 1211
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 9,
		"words" : 338,
		"chars" : 1818
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 10,
		"words" : 88,
		"chars" : 412
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 11,
		"words" : 124,
		"chars" : 596
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 12,
		"words" : 25,
		"chars" : 124
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 13,
		"words" : 149,
		"chars" : 783
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 14,
		"words" : 213,
		"chars" : 1113
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 15,
		"words" : 58,
		"chars" : 305
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 16,
		"words" : 296,
		"chars" : 1466
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 17,
		"words" : 120,
		"chars" : 632
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 18,
		"words" : 145,
		"chars" : 731
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 19,
		"words" : 169,
		"chars" : 933
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 20,
		"words" : 260,
		"chars" : 1359
	},
	{
		"season" : 1,
		"episode" : 4,
		"scene" : 21,
		"words" : 6,
		"chars" : 49
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 1,
		"words" : 21,
		"chars" : 113
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 2,
		"words" : 65,
		"chars" : 362
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 3,
		"words" : 662,
		"chars" : 3269
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 4,
		"words" : 164,
		"chars" : 809
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 5,
		"words" : 113,
		"chars" : 555
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 7,
		"words" : 136,
		"chars" : 704
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 8,
		"words" : 212,
		"chars" : 1090
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 9,
		"words" : 143,
		"chars" : 717
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 11,
		"words" : 7,
		"chars" : 31
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 12,
		"words" : 284,
		"chars" : 1393
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 13,
		"words" : 119,
		"chars" : 608
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 14,
		"words" : 334,
		"chars" : 1754
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 16,
		"words" : 39,
		"chars" : 218
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 18,
		"words" : 180,
		"chars" : 903
	},
	{
		"season" : 1,
		"episode" : 5,
		"scene" : 20,
		"words" : 306,
		"chars" : 1533
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 1,
		"words" : 141,
		"chars" : 735
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 2,
		"words" : 3,
		"chars" : 15
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 3,
		"words" : 75,
		"chars" : 274
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 4,
		"words" : 37,
		"chars" : 171
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 5,
		"words" : 9,
		"chars" : 54
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 6,
		"words" : 132,
		"chars" : 694
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 7,
		"words" : 153,
		"chars" : 746
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 8,
		"words" : 61,
		"chars" : 217
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 10,
		"words" : 47,
		"chars" : 242
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 11,
		"words" : 177,
		"chars" : 929
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 12,
		"words" : 8,
		"chars" : 25
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 13,
		"words" : 29,
		"chars" : 110
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 15,
		"words" : 162,
		"chars" : 876
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 16,
		"words" : 175,
		"chars" : 811
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 17,
		"words" : 78,
		"chars" : 293
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 18,
		"words" : 134,
		"chars" : 664
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 19,
		"words" : 195,
		"chars" : 992
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 20,
		"words" : 200,
		"chars" : 1049
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 21,
		"words" : 305,
		"chars" : 1562
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 22,
		"words" : 152,
		"chars" : 522
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 23,
		"words" : 13,
		"chars" : 54
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 24,
		"words" : 104,
		"chars" : 526
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 25,
		"words" : 145,
		"chars" : 702
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 26,
		"words" : 210,
		"chars" : 985
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 27,
		"words" : 4,
		"chars" : 12
	},
	{
		"season" : 1,
		"episode" : 6,
		"scene" : 29,
		"words" : 21,
		"chars" : 120
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 1,
		"words" : 31,
		"chars" : 145
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 2,
		"words" : 245,
		"chars" : 1204
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 3,
		"words" : 11,
		"chars" : 54
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 4,
		"words" : 178,
		"chars" : 957
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 5,
		"words" : 18,
		"chars" : 97
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 6,
		"words" : 129,
		"chars" : 626
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 7,
		"words" : 316,
		"chars" : 1677
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 8,
		"words" : 141,
		"chars" : 770
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 9,
		"words" : 161,
		"chars" : 805
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 10,
		"words" : 174,
		"chars" : 876
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 11,
		"words" : 53,
		"chars" : 245
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 12,
		"words" : 94,
		"chars" : 514
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 13,
		"words" : 206,
		"chars" : 1047
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 14,
		"words" : 61,
		"chars" : 307
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 16,
		"words" : 140,
		"chars" : 728
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 17,
		"words" : 67,
		"chars" : 339
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 18,
		"words" : 198,
		"chars" : 1069
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 19,
		"words" : 68,
		"chars" : 317
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 20,
		"words" : 52,
		"chars" : 259
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 21,
		"words" : 108,
		"chars" : 538
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 22,
		"words" : 187,
		"chars" : 942
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 23,
		"words" : 28,
		"chars" : 149
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 24,
		"words" : 173,
		"chars" : 898
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 25,
		"words" : 11,
		"chars" : 65
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 26,
		"words" : 73,
		"chars" : 358
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 27,
		"words" : 93,
		"chars" : 446
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 28,
		"words" : 256,
		"chars" : 1281
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 29,
		"words" : 233,
		"chars" : 1213
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 30,
		"words" : 47,
		"chars" : 248
	},
	{
		"season" : 1,
		"episode" : 7,
		"scene" : 31,
		"words" : 155,
		"chars" : 787
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 1,
		"words" : 37,
		"chars" : 181
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 2,
		"words" : 91,
		"chars" : 453
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 3,
		"words" : 103,
		"chars" : 546
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 4,
		"words" : 91,
		"chars" : 476
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 5,
		"words" : 161,
		"chars" : 829
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 6,
		"words" : 141,
		"chars" : 727
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 7,
		"words" : 144,
		"chars" : 774
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 8,
		"words" : 54,
		"chars" : 268
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 9,
		"words" : 292,
		"chars" : 1399
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 10,
		"words" : 150,
		"chars" : 785
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 11,
		"words" : 54,
		"chars" : 272
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 12,
		"words" : 144,
		"chars" : 746
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 13,
		"words" : 84,
		"chars" : 457
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 14,
		"words" : 238,
		"chars" : 1271
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 15,
		"words" : 151,
		"chars" : 738
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 16,
		"words" : 18,
		"chars" : 95
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 17,
		"words" : 188,
		"chars" : 995
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 18,
		"words" : 195,
		"chars" : 965
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 19,
		"words" : 198,
		"chars" : 998
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 20,
		"words" : 73,
		"chars" : 360
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 21,
		"words" : 72,
		"chars" : 360
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 22,
		"words" : 158,
		"chars" : 798
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 23,
		"words" : 217,
		"chars" : 1069
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 24,
		"words" : 34,
		"chars" : 188
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 25,
		"words" : 76,
		"chars" : 399
	},
	{
		"season" : 1,
		"episode" : 8,
		"scene" : 26,
		"words" : 101,
		"chars" : 483
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 2,
		"words" : 186,
		"chars" : 988
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 4,
		"words" : 2,
		"chars" : 13
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 5,
		"words" : 179,
		"chars" : 938
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 6,
		"words" : 28,
		"chars" : 142
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 7,
		"words" : 139,
		"chars" : 794
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 8,
		"words" : 141,
		"chars" : 690
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 9,
		"words" : 106,
		"chars" : 522
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 10,
		"words" : 101,
		"chars" : 513
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 11,
		"words" : 290,
		"chars" : 1541
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 12,
		"words" : 34,
		"chars" : 152
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 13,
		"words" : 80,
		"chars" : 398
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 14,
		"words" : 86,
		"chars" : 443
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 15,
		"words" : 226,
		"chars" : 1179
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 16,
		"words" : 109,
		"chars" : 517
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 17,
		"words" : 82,
		"chars" : 393
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 18,
		"words" : 223,
		"chars" : 1155
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 19,
		"words" : 117,
		"chars" : 602
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 20,
		"words" : 125,
		"chars" : 661
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 21,
		"words" : 83,
		"chars" : 413
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 22,
		"words" : 76,
		"chars" : 359
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 24,
		"words" : 196,
		"chars" : 1001
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 25,
		"words" : 12,
		"chars" : 60
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 26,
		"words" : 132,
		"chars" : 679
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 27,
		"words" : 210,
		"chars" : 1042
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 28,
		"words" : 104,
		"chars" : 532
	},
	{
		"season" : 1,
		"episode" : 9,
		"scene" : 29,
		"words" : 14,
		"chars" : 66
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 1,
		"words" : 40,
		"chars" : 256
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 2,
		"words" : 189,
		"chars" : 959
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 3,
		"words" : 261,
		"chars" : 1274
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 4,
		"words" : 102,
		"chars" : 518
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 5,
		"words" : 150,
		"chars" : 784
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 6,
		"words" : 171,
		"chars" : 862
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 8,
		"words" : 151,
		"chars" : 733
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 9,
		"words" : 189,
		"chars" : 1027
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 10,
		"words" : 28,
		"chars" : 145
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 11,
		"words" : 306,
		"chars" : 1538
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 12,
		"words" : 299,
		"chars" : 1552
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 13,
		"words" : 144,
		"chars" : 784
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 14,
		"words" : 210,
		"chars" : 1048
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 15,
		"words" : 287,
		"chars" : 1482
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 16,
		"words" : 124,
		"chars" : 658
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 17,
		"words" : 50,
		"chars" : 264
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 18,
		"words" : 264,
		"chars" : 1323
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 19,
		"words" : 70,
		"chars" : 357
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 20,
		"words" : 137,
		"chars" : 701
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 21,
		"words" : 202,
		"chars" : 1043
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 22,
		"words" : 7,
		"chars" : 36
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 23,
		"words" : 112,
		"chars" : 589
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 24,
		"words" : 124,
		"chars" : 652
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 25,
		"words" : 60,
		"chars" : 294
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 26,
		"words" : 33,
		"chars" : 167
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 27,
		"words" : 24,
		"chars" : 115
	},
	{
		"season" : 1,
		"episode" : 10,
		"scene" : 28,
		"words" : 185,
		"chars" : 960
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 1,
		"words" : 140,
		"chars" : 756
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 2,
		"words" : 145,
		"chars" : 771
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 3,
		"words" : 95,
		"chars" : 500
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 4,
		"words" : 190,
		"chars" : 996
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 6,
		"words" : 176,
		"chars" : 879
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 7,
		"words" : 138,
		"chars" : 678
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 8,
		"words" : 159,
		"chars" : 784
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 9,
		"words" : 191,
		"chars" : 925
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 10,
		"words" : 105,
		"chars" : 590
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 11,
		"words" : 153,
		"chars" : 779
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 12,
		"words" : 96,
		"chars" : 500
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 13,
		"words" : 113,
		"chars" : 581
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 14,
		"words" : 309,
		"chars" : 1631
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 15,
		"words" : 283,
		"chars" : 1466
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 16,
		"words" : 133,
		"chars" : 657
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 17,
		"words" : 163,
		"chars" : 846
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 18,
		"words" : 43,
		"chars" : 213
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 19,
		"words" : 22,
		"chars" : 124
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 20,
		"words" : 69,
		"chars" : 327
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 21,
		"words" : 215,
		"chars" : 1224
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 22,
		"words" : 69,
		"chars" : 410
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 23,
		"words" : 119,
		"chars" : 650
	},
	{
		"season" : 1,
		"episode" : 11,
		"scene" : 24,
		"words" : 79,
		"chars" : 394
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 1,
		"words" : 198,
		"chars" : 1037
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 2,
		"words" : 101,
		"chars" : 504
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 3,
		"words" : 353,
		"chars" : 1894
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 4,
		"words" : 194,
		"chars" : 1004
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 5,
		"words" : 58,
		"chars" : 267
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 6,
		"words" : 206,
		"chars" : 1070
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 7,
		"words" : 49,
		"chars" : 234
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 8,
		"words" : 77,
		"chars" : 392
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 9,
		"words" : 128,
		"chars" : 654
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 10,
		"words" : 164,
		"chars" : 778
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 11,
		"words" : 77,
		"chars" : 373
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 12,
		"words" : 211,
		"chars" : 1015
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 13,
		"words" : 142,
		"chars" : 726
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 14,
		"words" : 26,
		"chars" : 126
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 15,
		"words" : 105,
		"chars" : 546
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 16,
		"words" : 42,
		"chars" : 216
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 17,
		"words" : 407,
		"chars" : 2123
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 18,
		"words" : 15,
		"chars" : 76
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 19,
		"words" : 190,
		"chars" : 924
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 20,
		"words" : 70,
		"chars" : 335
	},
	{
		"season" : 1,
		"episode" : 12,
		"scene" : 21,
		"words" : 207,
		"chars" : 1074
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 1,
		"words" : 140,
		"chars" : 756
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 2,
		"words" : 92,
		"chars" : 470
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 3,
		"words" : 53,
		"chars" : 259
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 4,
		"words" : 79,
		"chars" : 423
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 5,
		"words" : 399,
		"chars" : 2055
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 6,
		"words" : 243,
		"chars" : 1280
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 7,
		"words" : 77,
		"chars" : 389
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 8,
		"words" : 69,
		"chars" : 345
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 9,
		"words" : 184,
		"chars" : 939
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 10,
		"words" : 123,
		"chars" : 610
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 11,
		"words" : 258,
		"chars" : 1402
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 12,
		"words" : 112,
		"chars" : 540
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 13,
		"words" : 72,
		"chars" : 371
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 14,
		"words" : 116,
		"chars" : 529
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 15,
		"words" : 133,
		"chars" : 714
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 16,
		"words" : 53,
		"chars" : 291
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 17,
		"words" : 108,
		"chars" : 562
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 18,
		"words" : 50,
		"chars" : 219
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 19,
		"words" : 146,
		"chars" : 734
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 20,
		"words" : 103,
		"chars" : 555
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 21,
		"words" : 56,
		"chars" : 284
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 22,
		"words" : 58,
		"chars" : 280
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 23,
		"words" : 151,
		"chars" : 757
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 24,
		"words" : 132,
		"chars" : 692
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 25,
		"words" : 185,
		"chars" : 934
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 26,
		"words" : 2,
		"chars" : 17
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 27,
		"words" : 101,
		"chars" : 539
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 28,
		"words" : 45,
		"chars" : 206
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 29,
		"words" : 5,
		"chars" : 37
	},
	{
		"season" : 1,
		"episode" : 13,
		"scene" : 30,
		"words" : 150,
		"chars" : 690
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 1,
		"words" : 185,
		"chars" : 877
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 2,
		"words" : 197,
		"chars" : 1012
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 3,
		"words" : 348,
		"chars" : 1699
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 4,
		"words" : 279,
		"chars" : 1439
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 5,
		"words" : 473,
		"chars" : 2441
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 6,
		"words" : 144,
		"chars" : 719
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 7,
		"words" : 51,
		"chars" : 257
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 8,
		"words" : 78,
		"chars" : 425
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 9,
		"words" : 165,
		"chars" : 844
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 10,
		"words" : 329,
		"chars" : 1666
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 11,
		"words" : 320,
		"chars" : 1617
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 12,
		"words" : 19,
		"chars" : 91
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 13,
		"words" : 64,
		"chars" : 324
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 14,
		"words" : 78,
		"chars" : 413
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 15,
		"words" : 15,
		"chars" : 95
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 16,
		"words" : 177,
		"chars" : 959
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 17,
		"words" : 2,
		"chars" : 17
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 18,
		"words" : 345,
		"chars" : 1767
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 19,
		"words" : 44,
		"chars" : 242
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 20,
		"words" : 15,
		"chars" : 79
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 21,
		"words" : 150,
		"chars" : 747
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 22,
		"words" : 84,
		"chars" : 431
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 23,
		"words" : 36,
		"chars" : 179
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 24,
		"words" : 227,
		"chars" : 1165
	},
	{
		"season" : 1,
		"episode" : 14,
		"scene" : 25,
		"words" : 30,
		"chars" : 180
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 1,
		"words" : 106,
		"chars" : 564
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 2,
		"words" : 295,
		"chars" : 1487
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 3,
		"words" : 70,
		"chars" : 370
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 4,
		"words" : 121,
		"chars" : 690
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 5,
		"words" : 136,
		"chars" : 736
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 6,
		"words" : 159,
		"chars" : 860
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 7,
		"words" : 225,
		"chars" : 1125
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 8,
		"words" : 23,
		"chars" : 88
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 9,
		"words" : 212,
		"chars" : 1104
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 10,
		"words" : 88,
		"chars" : 474
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 11,
		"words" : 51,
		"chars" : 273
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 12,
		"words" : 52,
		"chars" : 288
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 13,
		"words" : 211,
		"chars" : 1091
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 14,
		"words" : 171,
		"chars" : 910
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 16,
		"words" : 97,
		"chars" : 490
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 17,
		"words" : 47,
		"chars" : 246
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 18,
		"words" : 88,
		"chars" : 444
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 19,
		"words" : 193,
		"chars" : 1081
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 20,
		"words" : 157,
		"chars" : 797
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 21,
		"words" : 137,
		"chars" : 682
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 22,
		"words" : 15,
		"chars" : 87
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 23,
		"words" : 13,
		"chars" : 64
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 24,
		"words" : 117,
		"chars" : 577
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 25,
		"words" : 38,
		"chars" : 196
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 26,
		"words" : 57,
		"chars" : 306
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 27,
		"words" : 50,
		"chars" : 255
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 28,
		"words" : 170,
		"chars" : 856
	},
	{
		"season" : 1,
		"episode" : 15,
		"scene" : 29,
		"words" : 34,
		"chars" : 203
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 1,
		"words" : 108,
		"chars" : 544
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 3,
		"words" : 148,
		"chars" : 739
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 4,
		"words" : 377,
		"chars" : 1922
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 5,
		"words" : 148,
		"chars" : 739
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 6,
		"words" : 47,
		"chars" : 236
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 7,
		"words" : 4,
		"chars" : 15
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 8,
		"words" : 116,
		"chars" : 581
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 9,
		"words" : 151,
		"chars" : 743
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 10,
		"words" : 59,
		"chars" : 304
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 11,
		"words" : 79,
		"chars" : 412
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 12,
		"words" : 138,
		"chars" : 745
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 13,
		"words" : 305,
		"chars" : 1543
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 14,
		"words" : 370,
		"chars" : 1964
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 15,
		"words" : 86,
		"chars" : 460
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 16,
		"words" : 321,
		"chars" : 1596
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 18,
		"words" : 180,
		"chars" : 870
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 19,
		"words" : 135,
		"chars" : 689
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 20,
		"words" : 67,
		"chars" : 331
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 21,
		"words" : 10,
		"chars" : 47
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 22,
		"words" : 9,
		"chars" : 40
	},
	{
		"season" : 1,
		"episode" : 16,
		"scene" : 23,
		"words" : 155,
		"chars" : 750
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 2,
		"words" : 67,
		"chars" : 243
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 3,
		"words" : 116,
		"chars" : 472
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 4,
		"words" : 15,
		"chars" : 53
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 5,
		"words" : 119,
		"chars" : 475
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 6,
		"words" : 73,
		"chars" : 362
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 7,
		"words" : 63,
		"chars" : 327
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 8,
		"words" : 353,
		"chars" : 1796
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 9,
		"words" : 83,
		"chars" : 424
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 10,
		"words" : 104,
		"chars" : 509
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 11,
		"words" : 19,
		"chars" : 76
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 12,
		"words" : 48,
		"chars" : 201
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 13,
		"words" : 93,
		"chars" : 393
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 14,
		"words" : 126,
		"chars" : 646
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 15,
		"words" : 6,
		"chars" : 29
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 16,
		"words" : 63,
		"chars" : 353
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 17,
		"words" : 155,
		"chars" : 753
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 18,
		"words" : 41,
		"chars" : 229
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 19,
		"words" : 39,
		"chars" : 156
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 20,
		"words" : 30,
		"chars" : 91
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 21,
		"words" : 42,
		"chars" : 152
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 22,
		"words" : 40,
		"chars" : 141
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 23,
		"words" : 152,
		"chars" : 715
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 24,
		"words" : 210,
		"chars" : 1088
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 25,
		"words" : 66,
		"chars" : 340
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 26,
		"words" : 78,
		"chars" : 329
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 27,
		"words" : 113,
		"chars" : 453
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 28,
		"words" : 3,
		"chars" : 16
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 29,
		"words" : 17,
		"chars" : 81
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 30,
		"words" : 125,
		"chars" : 611
	},
	{
		"season" : 1,
		"episode" : 17,
		"scene" : 31,
		"words" : 5,
		"chars" : 20
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 1,
		"words" : 131,
		"chars" : 684
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 2,
		"words" : 209,
		"chars" : 1088
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 3,
		"words" : 131,
		"chars" : 709
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 4,
		"words" : 170,
		"chars" : 880
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 5,
		"words" : 223,
		"chars" : 1087
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 6,
		"words" : 86,
		"chars" : 439
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 7,
		"words" : 77,
		"chars" : 394
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 8,
		"words" : 110,
		"chars" : 528
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 9,
		"words" : 32,
		"chars" : 147
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 11,
		"words" : 272,
		"chars" : 1393
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 12,
		"words" : 3,
		"chars" : 17
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 13,
		"words" : 264,
		"chars" : 1433
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 14,
		"words" : 122,
		"chars" : 618
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 15,
		"words" : 158,
		"chars" : 798
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 16,
		"words" : 115,
		"chars" : 554
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 17,
		"words" : 69,
		"chars" : 319
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 18,
		"words" : 218,
		"chars" : 1124
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 19,
		"words" : 143,
		"chars" : 744
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 20,
		"words" : 46,
		"chars" : 221
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 21,
		"words" : 394,
		"chars" : 2096
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 22,
		"words" : 103,
		"chars" : 538
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 23,
		"words" : 23,
		"chars" : 123
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 24,
		"words" : 50,
		"chars" : 271
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 25,
		"words" : 472,
		"chars" : 2507
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 26,
		"words" : 80,
		"chars" : 399
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 28,
		"words" : 126,
		"chars" : 651
	},
	{
		"season" : 1,
		"episode" : 18,
		"scene" : 29,
		"words" : 201,
		"chars" : 1016
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 1,
		"words" : 114,
		"chars" : 570
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 2,
		"words" : 133,
		"chars" : 694
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 4,
		"words" : 83,
		"chars" : 446
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 5,
		"words" : 21,
		"chars" : 104
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 6,
		"words" : 108,
		"chars" : 565
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 7,
		"words" : 54,
		"chars" : 317
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 8,
		"words" : 107,
		"chars" : 549
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 9,
		"words" : 193,
		"chars" : 1004
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 10,
		"words" : 24,
		"chars" : 117
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 11,
		"words" : 120,
		"chars" : 635
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 12,
		"words" : 53,
		"chars" : 270
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 13,
		"words" : 218,
		"chars" : 1079
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 14,
		"words" : 135,
		"chars" : 665
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 15,
		"words" : 235,
		"chars" : 1219
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 16,
		"words" : 85,
		"chars" : 413
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 17,
		"words" : 17,
		"chars" : 94
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 18,
		"words" : 108,
		"chars" : 534
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 19,
		"words" : 65,
		"chars" : 349
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 20,
		"words" : 22,
		"chars" : 98
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 21,
		"words" : 171,
		"chars" : 839
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 22,
		"words" : 206,
		"chars" : 1021
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 23,
		"words" : 63,
		"chars" : 316
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 24,
		"words" : 69,
		"chars" : 324
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 25,
		"words" : 62,
		"chars" : 300
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 26,
		"words" : 30,
		"chars" : 146
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 27,
		"words" : 96,
		"chars" : 530
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 28,
		"words" : 96,
		"chars" : 558
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 29,
		"words" : 113,
		"chars" : 624
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 30,
		"words" : 180,
		"chars" : 886
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 31,
		"words" : 46,
		"chars" : 234
	},
	{
		"season" : 1,
		"episode" : 19,
		"scene" : 33,
		"words" : 16,
		"chars" : 72
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 1,
		"words" : 206,
		"chars" : 1063
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 2,
		"words" : 119,
		"chars" : 599
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 3,
		"words" : 65,
		"chars" : 292
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 4,
		"words" : 162,
		"chars" : 824
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 5,
		"words" : 88,
		"chars" : 445
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 6,
		"words" : 107,
		"chars" : 546
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 7,
		"words" : 29,
		"chars" : 140
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 8,
		"words" : 19,
		"chars" : 102
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 9,
		"words" : 120,
		"chars" : 606
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 10,
		"words" : 122,
		"chars" : 650
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 11,
		"words" : 32,
		"chars" : 165
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 12,
		"words" : 166,
		"chars" : 837
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 13,
		"words" : 152,
		"chars" : 720
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 14,
		"words" : 279,
		"chars" : 1381
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 15,
		"words" : 79,
		"chars" : 404
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 16,
		"words" : 97,
		"chars" : 485
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 17,
		"words" : 115,
		"chars" : 560
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 18,
		"words" : 164,
		"chars" : 819
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 19,
		"words" : 73,
		"chars" : 396
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 20,
		"words" : 161,
		"chars" : 800
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 21,
		"words" : 71,
		"chars" : 359
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 22,
		"words" : 156,
		"chars" : 758
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 23,
		"words" : 53,
		"chars" : 250
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 24,
		"words" : 137,
		"chars" : 678
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 25,
		"words" : 59,
		"chars" : 275
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 26,
		"words" : 84,
		"chars" : 425
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 27,
		"words" : 8,
		"chars" : 43
	},
	{
		"season" : 1,
		"episode" : 20,
		"scene" : 28,
		"words" : 32,
		"chars" : 168
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 1,
		"words" : 40,
		"chars" : 191
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 2,
		"words" : 226,
		"chars" : 1229
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 3,
		"words" : 82,
		"chars" : 428
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 4,
		"words" : 173,
		"chars" : 807
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 5,
		"words" : 30,
		"chars" : 167
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 6,
		"words" : 61,
		"chars" : 325
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 7,
		"words" : 95,
		"chars" : 472
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 8,
		"words" : 150,
		"chars" : 795
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 9,
		"words" : 150,
		"chars" : 755
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 10,
		"words" : 83,
		"chars" : 410
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 11,
		"words" : 21,
		"chars" : 114
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 12,
		"words" : 77,
		"chars" : 383
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 13,
		"words" : 76,
		"chars" : 371
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 14,
		"words" : 153,
		"chars" : 771
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 15,
		"words" : 144,
		"chars" : 728
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 16,
		"words" : 196,
		"chars" : 991
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 17,
		"words" : 89,
		"chars" : 491
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 18,
		"words" : 207,
		"chars" : 1074
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 19,
		"words" : 140,
		"chars" : 732
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 20,
		"words" : 158,
		"chars" : 813
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 21,
		"words" : 78,
		"chars" : 354
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 22,
		"words" : 172,
		"chars" : 863
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 23,
		"words" : 85,
		"chars" : 417
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 25,
		"words" : 194,
		"chars" : 948
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 26,
		"words" : 79,
		"chars" : 385
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 27,
		"words" : 90,
		"chars" : 541
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 28,
		"words" : 33,
		"chars" : 176
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 29,
		"words" : 105,
		"chars" : 552
	},
	{
		"season" : 1,
		"episode" : 21,
		"scene" : 30,
		"words" : 70,
		"chars" : 339
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 2,
		"words" : 19,
		"chars" : 100
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 4,
		"words" : 333,
		"chars" : 1751
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 5,
		"words" : 116,
		"chars" : 569
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 6,
		"words" : 42,
		"chars" : 234
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 7,
		"words" : 49,
		"chars" : 231
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 8,
		"words" : 12,
		"chars" : 37
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 9,
		"words" : 89,
		"chars" : 425
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 10,
		"words" : 84,
		"chars" : 424
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 11,
		"words" : 159,
		"chars" : 787
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 12,
		"words" : 105,
		"chars" : 521
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 13,
		"words" : 31,
		"chars" : 153
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 14,
		"words" : 164,
		"chars" : 821
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 15,
		"words" : 9,
		"chars" : 59
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 16,
		"words" : 77,
		"chars" : 387
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 17,
		"words" : 125,
		"chars" : 649
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 19,
		"words" : 73,
		"chars" : 354
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 20,
		"words" : 186,
		"chars" : 965
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 21,
		"words" : 83,
		"chars" : 434
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 22,
		"words" : 57,
		"chars" : 299
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 23,
		"words" : 55,
		"chars" : 276
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 24,
		"words" : 154,
		"chars" : 741
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 25,
		"words" : 113,
		"chars" : 555
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 26,
		"words" : 248,
		"chars" : 1292
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 27,
		"words" : 147,
		"chars" : 733
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 28,
		"words" : 64,
		"chars" : 303
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 29,
		"words" : 103,
		"chars" : 483
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 30,
		"words" : 97,
		"chars" : 473
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 31,
		"words" : 75,
		"chars" : 362
	},
	{
		"season" : 1,
		"episode" : 22,
		"scene" : 32,
		"words" : 62,
		"chars" : 307
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 1,
		"words" : 138,
		"chars" : 655
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 2,
		"words" : 45,
		"chars" : 250
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 3,
		"words" : 96,
		"chars" : 480
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 4,
		"words" : 306,
		"chars" : 1591
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 5,
		"words" : 49,
		"chars" : 227
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 6,
		"words" : 131,
		"chars" : 709
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 7,
		"words" : 200,
		"chars" : 1006
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 8,
		"words" : 184,
		"chars" : 920
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 9,
		"words" : 79,
		"chars" : 375
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 10,
		"words" : 205,
		"chars" : 1140
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 11,
		"words" : 325,
		"chars" : 1566
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 12,
		"words" : 250,
		"chars" : 1298
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 13,
		"words" : 44,
		"chars" : 213
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 14,
		"words" : 135,
		"chars" : 688
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 15,
		"words" : 81,
		"chars" : 422
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 16,
		"words" : 71,
		"chars" : 369
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 17,
		"words" : 41,
		"chars" : 213
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 18,
		"words" : 7,
		"chars" : 32
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 19,
		"words" : 76,
		"chars" : 408
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 20,
		"words" : 92,
		"chars" : 459
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 21,
		"words" : 76,
		"chars" : 396
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 22,
		"words" : 131,
		"chars" : 637
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 23,
		"words" : 81,
		"chars" : 425
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 24,
		"words" : 12,
		"chars" : 63
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 25,
		"words" : 71,
		"chars" : 342
	},
	{
		"season" : 1,
		"episode" : 23,
		"scene" : 26,
		"words" : 97,
		"chars" : 409
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 1,
		"words" : 199,
		"chars" : 1036
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 2,
		"words" : 168,
		"chars" : 846
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 3,
		"words" : 115,
		"chars" : 564
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 4,
		"words" : 66,
		"chars" : 314
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 5,
		"words" : 371,
		"chars" : 1955
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 6,
		"words" : 71,
		"chars" : 309
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 7,
		"words" : 85,
		"chars" : 451
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 8,
		"words" : 82,
		"chars" : 368
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 9,
		"words" : 115,
		"chars" : 591
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 10,
		"words" : 388,
		"chars" : 1862
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 11,
		"words" : 128,
		"chars" : 618
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 12,
		"words" : 171,
		"chars" : 819
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 13,
		"words" : 159,
		"chars" : 820
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 14,
		"words" : 329,
		"chars" : 1648
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 15,
		"words" : 225,
		"chars" : 1149
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 16,
		"words" : 181,
		"chars" : 914
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 17,
		"words" : 96,
		"chars" : 510
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 18,
		"words" : 79,
		"chars" : 434
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 19,
		"words" : 92,
		"chars" : 423
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 20,
		"words" : 81,
		"chars" : 395
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 21,
		"words" : 49,
		"chars" : 243
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 22,
		"words" : 453,
		"chars" : 2325
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 23,
		"words" : 72,
		"chars" : 344
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 24,
		"words" : 364,
		"chars" : 1788
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 25,
		"words" : 294,
		"chars" : 1401
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 26,
		"words" : 23,
		"chars" : 116
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 27,
		"words" : 52,
		"chars" : 264
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 28,
		"words" : 124,
		"chars" : 637
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 29,
		"words" : 239,
		"chars" : 1185
	},
	{
		"season" : 1,
		"episode" : 24,
		"scene" : 30,
		"words" : 350,
		"chars" : 1731
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 2,
		"words" : 224,
		"chars" : 1103
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 3,
		"words" : 215,
		"chars" : 1137
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 4,
		"words" : 73,
		"chars" : 356
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 5,
		"words" : 118,
		"chars" : 593
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 6,
		"words" : 114,
		"chars" : 584
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 7,
		"words" : 113,
		"chars" : 557
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 8,
		"words" : 337,
		"chars" : 1670
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 9,
		"words" : 201,
		"chars" : 1107
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 10,
		"words" : 66,
		"chars" : 347
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 11,
		"words" : 269,
		"chars" : 1338
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 12,
		"words" : 102,
		"chars" : 524
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 13,
		"words" : 120,
		"chars" : 615
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 14,
		"words" : 43,
		"chars" : 215
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 15,
		"words" : 128,
		"chars" : 619
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 16,
		"words" : 23,
		"chars" : 134
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 17,
		"words" : 6,
		"chars" : 30
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 18,
		"words" : 268,
		"chars" : 1379
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 19,
		"words" : 13,
		"chars" : 64
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 20,
		"words" : 202,
		"chars" : 956
	},
	{
		"season" : 2,
		"episode" : 1,
		"scene" : 21,
		"words" : 70,
		"chars" : 354
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 1,
		"words" : 26,
		"chars" : 126
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 2,
		"words" : 2,
		"chars" : 11
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 3,
		"words" : 18,
		"chars" : 82
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 4,
		"words" : 262,
		"chars" : 1294
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 5,
		"words" : 96,
		"chars" : 453
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 6,
		"words" : 14,
		"chars" : 68
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 7,
		"words" : 105,
		"chars" : 487
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 8,
		"words" : 142,
		"chars" : 710
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 9,
		"words" : 303,
		"chars" : 1589
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 10,
		"words" : 52,
		"chars" : 257
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 11,
		"words" : 186,
		"chars" : 925
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 12,
		"words" : 124,
		"chars" : 641
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 13,
		"words" : 198,
		"chars" : 992
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 14,
		"words" : 249,
		"chars" : 1220
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 15,
		"words" : 252,
		"chars" : 1226
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 16,
		"words" : 126,
		"chars" : 624
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 17,
		"words" : 79,
		"chars" : 384
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 18,
		"words" : 195,
		"chars" : 928
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 19,
		"words" : 39,
		"chars" : 194
	},
	{
		"season" : 2,
		"episode" : 2,
		"scene" : 20,
		"words" : 39,
		"chars" : 155
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 1,
		"words" : 20,
		"chars" : 97
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 2,
		"words" : 25,
		"chars" : 122
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 3,
		"words" : 219,
		"chars" : 1056
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 4,
		"words" : 111,
		"chars" : 537
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 5,
		"words" : 50,
		"chars" : 244
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 6,
		"words" : 88,
		"chars" : 410
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 7,
		"words" : 44,
		"chars" : 214
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 8,
		"words" : 114,
		"chars" : 564
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 9,
		"words" : 293,
		"chars" : 1453
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 10,
		"words" : 52,
		"chars" : 272
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 11,
		"words" : 91,
		"chars" : 434
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 12,
		"words" : 479,
		"chars" : 2762
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 13,
		"words" : 188,
		"chars" : 915
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 14,
		"words" : 12,
		"chars" : 62
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 15,
		"words" : 181,
		"chars" : 892
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 16,
		"words" : 340,
		"chars" : 1713
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 17,
		"words" : 111,
		"chars" : 553
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 18,
		"words" : 61,
		"chars" : 308
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 19,
		"words" : 126,
		"chars" : 636
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 20,
		"words" : 201,
		"chars" : 1027
	},
	{
		"season" : 2,
		"episode" : 3,
		"scene" : 21,
		"words" : 294,
		"chars" : 1432
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 1,
		"words" : 89,
		"chars" : 483
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 2,
		"words" : 167,
		"chars" : 798
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 3,
		"words" : 219,
		"chars" : 1109
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 4,
		"words" : 151,
		"chars" : 757
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 5,
		"words" : 74,
		"chars" : 393
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 6,
		"words" : 61,
		"chars" : 304
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 8,
		"words" : 203,
		"chars" : 1091
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 9,
		"words" : 130,
		"chars" : 643
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 10,
		"words" : 59,
		"chars" : 290
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 11,
		"words" : 118,
		"chars" : 589
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 12,
		"words" : 55,
		"chars" : 279
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 13,
		"words" : 173,
		"chars" : 837
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 14,
		"words" : 149,
		"chars" : 732
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 15,
		"words" : 151,
		"chars" : 787
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 16,
		"words" : 171,
		"chars" : 953
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 17,
		"words" : 188,
		"chars" : 945
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 18,
		"words" : 89,
		"chars" : 428
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 19,
		"words" : 41,
		"chars" : 205
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 20,
		"words" : 165,
		"chars" : 813
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 22,
		"words" : 44,
		"chars" : 206
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 23,
		"words" : 189,
		"chars" : 970
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 24,
		"words" : 26,
		"chars" : 136
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 25,
		"words" : 24,
		"chars" : 124
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 26,
		"words" : 85,
		"chars" : 410
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 27,
		"words" : 5,
		"chars" : 31
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 28,
		"words" : 47,
		"chars" : 247
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 29,
		"words" : 85,
		"chars" : 419
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 30,
		"words" : 57,
		"chars" : 283
	},
	{
		"season" : 2,
		"episode" : 4,
		"scene" : 31,
		"words" : 51,
		"chars" : 260
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 1,
		"words" : 53,
		"chars" : 268
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 2,
		"words" : 66,
		"chars" : 242
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 3,
		"words" : 108,
		"chars" : 444
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 4,
		"words" : 87,
		"chars" : 404
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 5,
		"words" : 179,
		"chars" : 865
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 6,
		"words" : 132,
		"chars" : 637
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 7,
		"words" : 31,
		"chars" : 134
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 8,
		"words" : 88,
		"chars" : 368
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 9,
		"words" : 132,
		"chars" : 675
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 10,
		"words" : 86,
		"chars" : 448
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 11,
		"words" : 141,
		"chars" : 720
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 12,
		"words" : 41,
		"chars" : 209
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 13,
		"words" : 117,
		"chars" : 556
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 14,
		"words" : 39,
		"chars" : 166
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 15,
		"words" : 86,
		"chars" : 361
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 16,
		"words" : 9,
		"chars" : 48
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 17,
		"words" : 33,
		"chars" : 162
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 18,
		"words" : 74,
		"chars" : 357
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 19,
		"words" : 18,
		"chars" : 83
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 20,
		"words" : 131,
		"chars" : 550
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 21,
		"words" : 21,
		"chars" : 118
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 22,
		"words" : 32,
		"chars" : 159
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 23,
		"words" : 99,
		"chars" : 412
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 24,
		"words" : 77,
		"chars" : 389
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 25,
		"words" : 86,
		"chars" : 442
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 26,
		"words" : 22,
		"chars" : 104
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 27,
		"words" : 114,
		"chars" : 554
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 28,
		"words" : 23,
		"chars" : 119
	},
	{
		"season" : 2,
		"episode" : 5,
		"scene" : 29,
		"words" : 10,
		"chars" : 44
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 1,
		"words" : 70,
		"chars" : 360
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 2,
		"words" : 174,
		"chars" : 846
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 3,
		"words" : 49,
		"chars" : 245
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 4,
		"words" : 167,
		"chars" : 813
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 5,
		"words" : 108,
		"chars" : 534
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 6,
		"words" : 67,
		"chars" : 375
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 7,
		"words" : 105,
		"chars" : 512
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 8,
		"words" : 140,
		"chars" : 713
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 9,
		"words" : 180,
		"chars" : 952
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 10,
		"words" : 13,
		"chars" : 71
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 11,
		"words" : 122,
		"chars" : 614
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 12,
		"words" : 82,
		"chars" : 408
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 13,
		"words" : 78,
		"chars" : 415
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 14,
		"words" : 186,
		"chars" : 897
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 15,
		"words" : 44,
		"chars" : 214
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 16,
		"words" : 76,
		"chars" : 358
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 17,
		"words" : 224,
		"chars" : 1130
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 18,
		"words" : 132,
		"chars" : 649
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 19,
		"words" : 83,
		"chars" : 369
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 20,
		"words" : 147,
		"chars" : 765
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 21,
		"words" : 108,
		"chars" : 521
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 22,
		"words" : 83,
		"chars" : 414
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 23,
		"words" : 177,
		"chars" : 831
	},
	{
		"season" : 2,
		"episode" : 6,
		"scene" : 24,
		"words" : 113,
		"chars" : 541
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 1,
		"words" : 65,
		"chars" : 327
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 2,
		"words" : 240,
		"chars" : 1173
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 3,
		"words" : 74,
		"chars" : 373
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 4,
		"words" : 50,
		"chars" : 235
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 5,
		"words" : 16,
		"chars" : 88
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 6,
		"words" : 194,
		"chars" : 989
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 7,
		"words" : 23,
		"chars" : 115
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 9,
		"words" : 29,
		"chars" : 158
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 10,
		"words" : 41,
		"chars" : 196
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 11,
		"words" : 70,
		"chars" : 329
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 12,
		"words" : 181,
		"chars" : 915
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 13,
		"words" : 52,
		"chars" : 264
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 14,
		"words" : 52,
		"chars" : 244
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 15,
		"words" : 167,
		"chars" : 787
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 16,
		"words" : 81,
		"chars" : 419
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 17,
		"words" : 101,
		"chars" : 481
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 18,
		"words" : 57,
		"chars" : 276
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 19,
		"words" : 46,
		"chars" : 223
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 20,
		"words" : 25,
		"chars" : 130
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 22,
		"words" : 55,
		"chars" : 258
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 23,
		"words" : 64,
		"chars" : 288
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 24,
		"words" : 329,
		"chars" : 1623
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 25,
		"words" : 6,
		"chars" : 36
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 26,
		"words" : 134,
		"chars" : 714
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 27,
		"words" : 30,
		"chars" : 146
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 28,
		"words" : 11,
		"chars" : 54
	},
	{
		"season" : 2,
		"episode" : 7,
		"scene" : 29,
		"words" : 64,
		"chars" : 324
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 1,
		"words" : 130,
		"chars" : 646
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 2,
		"words" : 9,
		"chars" : 50
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 3,
		"words" : 124,
		"chars" : 558
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 4,
		"words" : 175,
		"chars" : 869
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 5,
		"words" : 204,
		"chars" : 1090
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 6,
		"words" : 70,
		"chars" : 351
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 7,
		"words" : 214,
		"chars" : 1065
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 8,
		"words" : 105,
		"chars" : 497
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 9,
		"words" : 37,
		"chars" : 175
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 10,
		"words" : 25,
		"chars" : 118
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 11,
		"words" : 79,
		"chars" : 418
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 12,
		"words" : 186,
		"chars" : 865
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 13,
		"words" : 57,
		"chars" : 256
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 14,
		"words" : 115,
		"chars" : 557
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 16,
		"words" : 187,
		"chars" : 946
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 17,
		"words" : 75,
		"chars" : 350
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 18,
		"words" : 24,
		"chars" : 122
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 19,
		"words" : 83,
		"chars" : 425
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 20,
		"words" : 118,
		"chars" : 603
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 21,
		"words" : 218,
		"chars" : 1010
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 22,
		"words" : 8,
		"chars" : 37
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 23,
		"words" : 30,
		"chars" : 148
	},
	{
		"season" : 2,
		"episode" : 8,
		"scene" : 24,
		"words" : 18,
		"chars" : 92
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 2,
		"words" : 77,
		"chars" : 365
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 4,
		"words" : 63,
		"chars" : 335
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 5,
		"words" : 150,
		"chars" : 743
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 6,
		"words" : 120,
		"chars" : 580
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 7,
		"words" : 27,
		"chars" : 123
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 8,
		"words" : 35,
		"chars" : 175
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 9,
		"words" : 59,
		"chars" : 269
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 10,
		"words" : 29,
		"chars" : 143
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 11,
		"words" : 103,
		"chars" : 513
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 12,
		"words" : 86,
		"chars" : 473
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 13,
		"words" : 46,
		"chars" : 249
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 14,
		"words" : 85,
		"chars" : 415
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 15,
		"words" : 121,
		"chars" : 597
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 16,
		"words" : 213,
		"chars" : 1193
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 17,
		"words" : 48,
		"chars" : 234
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 18,
		"words" : 248,
		"chars" : 1286
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 19,
		"words" : 251,
		"chars" : 1276
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 20,
		"words" : 87,
		"chars" : 451
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 21,
		"words" : 32,
		"chars" : 162
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 22,
		"words" : 195,
		"chars" : 963
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 23,
		"words" : 135,
		"chars" : 664
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 24,
		"words" : 173,
		"chars" : 885
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 25,
		"words" : 67,
		"chars" : 339
	},
	{
		"season" : 2,
		"episode" : 9,
		"scene" : 26,
		"words" : 165,
		"chars" : 954
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 1,
		"words" : 50,
		"chars" : 244
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 2,
		"words" : 133,
		"chars" : 678
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 3,
		"words" : 36,
		"chars" : 169
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 4,
		"words" : 100,
		"chars" : 527
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 5,
		"words" : 183,
		"chars" : 916
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 6,
		"words" : 165,
		"chars" : 773
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 7,
		"words" : 72,
		"chars" : 392
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 8,
		"words" : 85,
		"chars" : 439
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 9,
		"words" : 91,
		"chars" : 447
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 10,
		"words" : 137,
		"chars" : 681
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 11,
		"words" : 290,
		"chars" : 1426
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 12,
		"words" : 115,
		"chars" : 603
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 13,
		"words" : 111,
		"chars" : 522
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 14,
		"words" : 57,
		"chars" : 292
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 15,
		"words" : 252,
		"chars" : 1249
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 16,
		"words" : 111,
		"chars" : 540
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 17,
		"words" : 65,
		"chars" : 309
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 18,
		"words" : 121,
		"chars" : 597
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 20,
		"words" : 116,
		"chars" : 540
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 21,
		"words" : 4,
		"chars" : 23
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 22,
		"words" : 5,
		"chars" : 29
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 23,
		"words" : 13,
		"chars" : 62
	},
	{
		"season" : 2,
		"episode" : 10,
		"scene" : 24,
		"words" : 174,
		"chars" : 865
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 1,
		"words" : 247,
		"chars" : 1320
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 2,
		"words" : 120,
		"chars" : 615
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 3,
		"words" : 116,
		"chars" : 604
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 4,
		"words" : 64,
		"chars" : 309
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 5,
		"words" : 127,
		"chars" : 637
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 6,
		"words" : 136,
		"chars" : 685
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 7,
		"words" : 102,
		"chars" : 484
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 8,
		"words" : 72,
		"chars" : 370
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 9,
		"words" : 125,
		"chars" : 646
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 10,
		"words" : 111,
		"chars" : 476
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 11,
		"words" : 140,
		"chars" : 677
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 12,
		"words" : 134,
		"chars" : 672
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 13,
		"words" : 100,
		"chars" : 509
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 14,
		"words" : 111,
		"chars" : 574
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 15,
		"words" : 78,
		"chars" : 350
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 16,
		"words" : 35,
		"chars" : 165
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 17,
		"words" : 140,
		"chars" : 680
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 18,
		"words" : 66,
		"chars" : 325
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 19,
		"words" : 152,
		"chars" : 836
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 20,
		"words" : 389,
		"chars" : 1947
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 21,
		"words" : 34,
		"chars" : 131
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 22,
		"words" : 37,
		"chars" : 168
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 23,
		"words" : 221,
		"chars" : 1086
	},
	{
		"season" : 2,
		"episode" : 11,
		"scene" : 24,
		"words" : 137,
		"chars" : 663
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 1,
		"words" : 117,
		"chars" : 611
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 2,
		"words" : 24,
		"chars" : 130
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 3,
		"words" : 97,
		"chars" : 497
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 4,
		"words" : 97,
		"chars" : 472
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 5,
		"words" : 122,
		"chars" : 641
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 6,
		"words" : 116,
		"chars" : 619
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 7,
		"words" : 178,
		"chars" : 922
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 8,
		"words" : 84,
		"chars" : 407
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 9,
		"words" : 183,
		"chars" : 934
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 10,
		"words" : 158,
		"chars" : 835
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 11,
		"words" : 162,
		"chars" : 817
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 12,
		"words" : 160,
		"chars" : 853
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 13,
		"words" : 121,
		"chars" : 593
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 14,
		"words" : 82,
		"chars" : 401
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 16,
		"words" : 145,
		"chars" : 757
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 17,
		"words" : 235,
		"chars" : 1196
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 18,
		"words" : 174,
		"chars" : 881
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 19,
		"words" : 72,
		"chars" : 362
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 20,
		"words" : 124,
		"chars" : 604
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 21,
		"words" : 51,
		"chars" : 253
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 22,
		"words" : 142,
		"chars" : 725
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 23,
		"words" : 74,
		"chars" : 368
	},
	{
		"season" : 2,
		"episode" : 12,
		"scene" : 24,
		"words" : 134,
		"chars" : 645
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 1,
		"words" : 212,
		"chars" : 1061
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 2,
		"words" : 164,
		"chars" : 830
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 3,
		"words" : 210,
		"chars" : 1010
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 4,
		"words" : 179,
		"chars" : 894
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 5,
		"words" : 152,
		"chars" : 780
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 6,
		"words" : 72,
		"chars" : 388
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 7,
		"words" : 13,
		"chars" : 58
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 8,
		"words" : 117,
		"chars" : 589
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 9,
		"words" : 91,
		"chars" : 442
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 10,
		"words" : 155,
		"chars" : 795
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 11,
		"words" : 97,
		"chars" : 512
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 12,
		"words" : 74,
		"chars" : 374
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 13,
		"words" : 105,
		"chars" : 483
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 14,
		"words" : 255,
		"chars" : 1255
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 15,
		"words" : 210,
		"chars" : 1024
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 16,
		"words" : 226,
		"chars" : 1177
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 17,
		"words" : 248,
		"chars" : 1216
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 18,
		"words" : 94,
		"chars" : 439
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 19,
		"words" : 321,
		"chars" : 1622
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 20,
		"words" : 253,
		"chars" : 1220
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 21,
		"words" : 160,
		"chars" : 741
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 22,
		"words" : 148,
		"chars" : 831
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 23,
		"words" : 118,
		"chars" : 579
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 24,
		"words" : 7,
		"chars" : 81
	},
	{
		"season" : 2,
		"episode" : 13,
		"scene" : 25,
		"words" : 14,
		"chars" : 66
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 1,
		"words" : 145,
		"chars" : 757
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 2,
		"words" : 135,
		"chars" : 719
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 3,
		"words" : 3,
		"chars" : 17
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 4,
		"words" : 29,
		"chars" : 150
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 5,
		"words" : 123,
		"chars" : 609
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 6,
		"words" : 107,
		"chars" : 500
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 7,
		"words" : 28,
		"chars" : 145
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 8,
		"words" : 121,
		"chars" : 613
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 9,
		"words" : 34,
		"chars" : 186
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 10,
		"words" : 154,
		"chars" : 754
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 11,
		"words" : 188,
		"chars" : 995
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 12,
		"words" : 186,
		"chars" : 900
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 13,
		"words" : 118,
		"chars" : 600
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 14,
		"words" : 126,
		"chars" : 622
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 15,
		"words" : 96,
		"chars" : 460
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 16,
		"words" : 4,
		"chars" : 0
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 17,
		"words" : 21,
		"chars" : 103
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 18,
		"words" : 410,
		"chars" : 1985
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 19,
		"words" : 118,
		"chars" : 580
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 20,
		"words" : 555,
		"chars" : 2800
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 21,
		"words" : 79,
		"chars" : 381
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 22,
		"words" : 85,
		"chars" : 415
	},
	{
		"season" : 2,
		"episode" : 14,
		"scene" : 23,
		"words" : 150,
		"chars" : 727
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 1,
		"words" : 79,
		"chars" : 405
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 2,
		"words" : 30,
		"chars" : 140
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 3,
		"words" : 91,
		"chars" : 478
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 4,
		"words" : 184,
		"chars" : 964
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 5,
		"words" : 48,
		"chars" : 252
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 6,
		"words" : 169,
		"chars" : 855
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 7,
		"words" : 197,
		"chars" : 1014
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 8,
		"words" : 58,
		"chars" : 324
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 9,
		"words" : 93,
		"chars" : 503
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 10,
		"words" : 20,
		"chars" : 99
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 11,
		"words" : 151,
		"chars" : 769
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 12,
		"words" : 32,
		"chars" : 166
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 13,
		"words" : 137,
		"chars" : 680
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 14,
		"words" : 84,
		"chars" : 410
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 15,
		"words" : 192,
		"chars" : 951
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 16,
		"words" : 45,
		"chars" : 246
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 17,
		"words" : 178,
		"chars" : 894
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 18,
		"words" : 70,
		"chars" : 315
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 19,
		"words" : 93,
		"chars" : 460
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 20,
		"words" : 38,
		"chars" : 161
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 21,
		"words" : 177,
		"chars" : 883
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 22,
		"words" : 27,
		"chars" : 135
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 23,
		"words" : 30,
		"chars" : 146
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 24,
		"words" : 120,
		"chars" : 584
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 25,
		"words" : 84,
		"chars" : 403
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 26,
		"words" : 71,
		"chars" : 340
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 27,
		"words" : 51,
		"chars" : 247
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 28,
		"words" : 81,
		"chars" : 371
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 29,
		"words" : 11,
		"chars" : 54
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 30,
		"words" : 211,
		"chars" : 1012
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 31,
		"words" : 87,
		"chars" : 424
	},
	{
		"season" : 2,
		"episode" : 15,
		"scene" : 32,
		"words" : 137,
		"chars" : 719
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 1,
		"words" : 111,
		"chars" : 412
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 2,
		"words" : 58,
		"chars" : 210
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 3,
		"words" : 173,
		"chars" : 856
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 4,
		"words" : 159,
		"chars" : 789
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 5,
		"words" : 107,
		"chars" : 445
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 6,
		"words" : 152,
		"chars" : 746
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 7,
		"words" : 177,
		"chars" : 825
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 8,
		"words" : 86,
		"chars" : 458
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 9,
		"words" : 270,
		"chars" : 1336
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 10,
		"words" : 40,
		"chars" : 198
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 11,
		"words" : 79,
		"chars" : 344
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 12,
		"words" : 50,
		"chars" : 239
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 13,
		"words" : 132,
		"chars" : 617
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 14,
		"words" : 110,
		"chars" : 548
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 15,
		"words" : 75,
		"chars" : 376
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 16,
		"words" : 134,
		"chars" : 730
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 17,
		"words" : 100,
		"chars" : 446
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 18,
		"words" : 95,
		"chars" : 434
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 19,
		"words" : 24,
		"chars" : 134
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 20,
		"words" : 58,
		"chars" : 275
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 21,
		"words" : 86,
		"chars" : 415
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 22,
		"words" : 71,
		"chars" : 263
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 23,
		"words" : 81,
		"chars" : 303
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 24,
		"words" : 29,
		"chars" : 121
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 25,
		"words" : 63,
		"chars" : 245
	},
	{
		"season" : 2,
		"episode" : 16,
		"scene" : 26,
		"words" : 269,
		"chars" : 1337
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 1,
		"words" : 115,
		"chars" : 593
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 2,
		"words" : 78,
		"chars" : 388
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 3,
		"words" : 80,
		"chars" : 414
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 4,
		"words" : 149,
		"chars" : 808
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 5,
		"words" : 16,
		"chars" : 89
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 6,
		"words" : 26,
		"chars" : 122
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 7,
		"words" : 72,
		"chars" : 344
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 8,
		"words" : 58,
		"chars" : 300
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 9,
		"words" : 139,
		"chars" : 676
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 10,
		"words" : 24,
		"chars" : 139
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 11,
		"words" : 60,
		"chars" : 296
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 12,
		"words" : 178,
		"chars" : 817
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 13,
		"words" : 169,
		"chars" : 814
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 14,
		"words" : 156,
		"chars" : 755
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 15,
		"words" : 96,
		"chars" : 489
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 16,
		"words" : 201,
		"chars" : 992
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 17,
		"words" : 79,
		"chars" : 391
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 18,
		"words" : 161,
		"chars" : 782
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 19,
		"words" : 174,
		"chars" : 861
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 20,
		"words" : 58,
		"chars" : 297
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 21,
		"words" : 220,
		"chars" : 1059
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 22,
		"words" : 50,
		"chars" : 263
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 23,
		"words" : 129,
		"chars" : 631
	},
	{
		"season" : 2,
		"episode" : 17,
		"scene" : 24,
		"words" : 214,
		"chars" : 1040
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 1,
		"words" : 75,
		"chars" : 392
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 2,
		"words" : 302,
		"chars" : 1443
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 3,
		"words" : 86,
		"chars" : 415
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 4,
		"words" : 196,
		"chars" : 973
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 5,
		"words" : 156,
		"chars" : 823
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 6,
		"words" : 467,
		"chars" : 2291
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 7,
		"words" : 58,
		"chars" : 294
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 8,
		"words" : 48,
		"chars" : 234
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 9,
		"words" : 284,
		"chars" : 1495
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 10,
		"words" : 232,
		"chars" : 1125
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 11,
		"words" : 87,
		"chars" : 441
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 12,
		"words" : 130,
		"chars" : 636
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 13,
		"words" : 17,
		"chars" : 84
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 14,
		"words" : 239,
		"chars" : 1246
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 15,
		"words" : 291,
		"chars" : 1493
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 16,
		"words" : 388,
		"chars" : 2027
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 17,
		"words" : 199,
		"chars" : 955
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 18,
		"words" : 285,
		"chars" : 1499
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 19,
		"words" : 327,
		"chars" : 1600
	},
	{
		"season" : 2,
		"episode" : 18,
		"scene" : 20,
		"words" : 37,
		"chars" : 192
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 1,
		"words" : 146,
		"chars" : 738
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 2,
		"words" : 211,
		"chars" : 1043
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 3,
		"words" : 140,
		"chars" : 702
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 4,
		"words" : 110,
		"chars" : 518
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 5,
		"words" : 56,
		"chars" : 270
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 6,
		"words" : 120,
		"chars" : 590
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 7,
		"words" : 287,
		"chars" : 1415
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 8,
		"words" : 170,
		"chars" : 862
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 9,
		"words" : 154,
		"chars" : 791
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 10,
		"words" : 63,
		"chars" : 297
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 11,
		"words" : 196,
		"chars" : 991
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 12,
		"words" : 214,
		"chars" : 1110
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 13,
		"words" : 153,
		"chars" : 765
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 14,
		"words" : 77,
		"chars" : 395
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 15,
		"words" : 184,
		"chars" : 883
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 16,
		"words" : 76,
		"chars" : 326
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 17,
		"words" : 140,
		"chars" : 704
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 18,
		"words" : 154,
		"chars" : 798
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 19,
		"words" : 230,
		"chars" : 1119
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 20,
		"words" : 77,
		"chars" : 391
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 21,
		"words" : 35,
		"chars" : 182
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 22,
		"words" : 55,
		"chars" : 265
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 23,
		"words" : 6,
		"chars" : 37
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 24,
		"words" : 47,
		"chars" : 223
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 25,
		"words" : 21,
		"chars" : 98
	},
	{
		"season" : 2,
		"episode" : 19,
		"scene" : 27,
		"words" : 38,
		"chars" : 179
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 1,
		"words" : 39,
		"chars" : 215
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 3,
		"words" : 34,
		"chars" : 181
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 4,
		"words" : 173,
		"chars" : 864
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 5,
		"words" : 100,
		"chars" : 492
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 6,
		"words" : 235,
		"chars" : 1194
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 7,
		"words" : 30,
		"chars" : 148
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 8,
		"words" : 201,
		"chars" : 1009
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 9,
		"words" : 100,
		"chars" : 506
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 10,
		"words" : 48,
		"chars" : 264
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 11,
		"words" : 92,
		"chars" : 444
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 12,
		"words" : 209,
		"chars" : 1090
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 13,
		"words" : 69,
		"chars" : 360
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 14,
		"words" : 71,
		"chars" : 366
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 15,
		"words" : 147,
		"chars" : 701
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 16,
		"words" : 24,
		"chars" : 123
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 17,
		"words" : 99,
		"chars" : 488
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 18,
		"words" : 348,
		"chars" : 1680
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 19,
		"words" : 160,
		"chars" : 800
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 20,
		"words" : 169,
		"chars" : 871
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 21,
		"words" : 158,
		"chars" : 761
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 22,
		"words" : 82,
		"chars" : 387
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 23,
		"words" : 193,
		"chars" : 901
	},
	{
		"season" : 2,
		"episode" : 20,
		"scene" : 24,
		"words" : 167,
		"chars" : 793
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 1,
		"words" : 64,
		"chars" : 287
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 2,
		"words" : 100,
		"chars" : 502
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 3,
		"words" : 11,
		"chars" : 57
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 4,
		"words" : 124,
		"chars" : 620
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 5,
		"words" : 19,
		"chars" : 86
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 6,
		"words" : 154,
		"chars" : 768
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 7,
		"words" : 79,
		"chars" : 412
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 8,
		"words" : 80,
		"chars" : 426
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 9,
		"words" : 181,
		"chars" : 940
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 10,
		"words" : 79,
		"chars" : 388
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 11,
		"words" : 167,
		"chars" : 836
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 12,
		"words" : 182,
		"chars" : 940
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 13,
		"words" : 103,
		"chars" : 509
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 14,
		"words" : 150,
		"chars" : 759
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 15,
		"words" : 93,
		"chars" : 468
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 16,
		"words" : 116,
		"chars" : 552
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 17,
		"words" : 241,
		"chars" : 1271
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 18,
		"words" : 18,
		"chars" : 95
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 19,
		"words" : 69,
		"chars" : 337
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 20,
		"words" : 20,
		"chars" : 97
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 21,
		"words" : 308,
		"chars" : 1768
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 22,
		"words" : 168,
		"chars" : 845
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 23,
		"words" : 191,
		"chars" : 910
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 24,
		"words" : 161,
		"chars" : 782
	},
	{
		"season" : 2,
		"episode" : 21,
		"scene" : 25,
		"words" : 36,
		"chars" : 195
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 1,
		"words" : 170,
		"chars" : 850
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 2,
		"words" : 17,
		"chars" : 88
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 3,
		"words" : 195,
		"chars" : 951
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 4,
		"words" : 47,
		"chars" : 238
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 5,
		"words" : 163,
		"chars" : 775
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 6,
		"words" : 129,
		"chars" : 608
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 7,
		"words" : 236,
		"chars" : 1168
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 8,
		"words" : 284,
		"chars" : 1424
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 9,
		"words" : 219,
		"chars" : 1113
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 10,
		"words" : 119,
		"chars" : 611
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 11,
		"words" : 59,
		"chars" : 296
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 12,
		"words" : 226,
		"chars" : 1113
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 13,
		"words" : 90,
		"chars" : 470
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 14,
		"words" : 13,
		"chars" : 63
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 16,
		"words" : 141,
		"chars" : 711
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 17,
		"words" : 61,
		"chars" : 316
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 18,
		"words" : 476,
		"chars" : 2283
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 19,
		"words" : 181,
		"chars" : 872
	},
	{
		"season" : 2,
		"episode" : 22,
		"scene" : 20,
		"words" : 102,
		"chars" : 510
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 1,
		"words" : 189,
		"chars" : 944
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 2,
		"words" : 108,
		"chars" : 614
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 3,
		"words" : 119,
		"chars" : 644
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 4,
		"words" : 194,
		"chars" : 1008
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 5,
		"words" : 136,
		"chars" : 661
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 6,
		"words" : 157,
		"chars" : 839
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 7,
		"words" : 62,
		"chars" : 306
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 8,
		"words" : 192,
		"chars" : 925
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 9,
		"words" : 42,
		"chars" : 163
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 10,
		"words" : 172,
		"chars" : 872
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 11,
		"words" : 41,
		"chars" : 203
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 12,
		"words" : 73,
		"chars" : 359
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 13,
		"words" : 131,
		"chars" : 635
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 14,
		"words" : 265,
		"chars" : 1443
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 15,
		"words" : 34,
		"chars" : 150
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 16,
		"words" : 38,
		"chars" : 194
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 17,
		"words" : 184,
		"chars" : 960
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 18,
		"words" : 49,
		"chars" : 241
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 19,
		"words" : 105,
		"chars" : 538
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 20,
		"words" : 357,
		"chars" : 1815
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 21,
		"words" : 10,
		"chars" : 58
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 22,
		"words" : 39,
		"chars" : 230
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 23,
		"words" : 91,
		"chars" : 464
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 24,
		"words" : 255,
		"chars" : 1344
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 25,
		"words" : 201,
		"chars" : 1064
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 26,
		"words" : 198,
		"chars" : 1025
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 28,
		"words" : 267,
		"chars" : 1427
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 29,
		"words" : 39,
		"chars" : 201
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 30,
		"words" : 164,
		"chars" : 785
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 32,
		"words" : 107,
		"chars" : 581
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 33,
		"words" : 148,
		"chars" : 751
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 34,
		"words" : 112,
		"chars" : 547
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 35,
		"words" : 177,
		"chars" : 867
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 36,
		"words" : 20,
		"chars" : 111
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 37,
		"words" : 275,
		"chars" : 1347
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 38,
		"words" : 50,
		"chars" : 275
	},
	{
		"season" : 2,
		"episode" : 23,
		"scene" : 39,
		"words" : 103,
		"chars" : 515
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 1,
		"words" : 19,
		"chars" : 95
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 2,
		"words" : 198,
		"chars" : 1046
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 4,
		"words" : 7,
		"chars" : 35
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 5,
		"words" : 68,
		"chars" : 340
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 6,
		"words" : 42,
		"chars" : 202
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 7,
		"words" : 6,
		"chars" : 31
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 8,
		"words" : 142,
		"chars" : 661
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 9,
		"words" : 73,
		"chars" : 340
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 10,
		"words" : 10,
		"chars" : 55
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 11,
		"words" : 174,
		"chars" : 847
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 12,
		"words" : 196,
		"chars" : 959
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 13,
		"words" : 269,
		"chars" : 1341
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 14,
		"words" : 105,
		"chars" : 499
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 15,
		"words" : 120,
		"chars" : 623
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 16,
		"words" : 24,
		"chars" : 134
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 17,
		"words" : 199,
		"chars" : 957
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 18,
		"words" : 74,
		"chars" : 354
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 19,
		"words" : 102,
		"chars" : 548
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 20,
		"words" : 205,
		"chars" : 1047
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 21,
		"words" : 96,
		"chars" : 476
	},
	{
		"season" : 3,
		"episode" : 1,
		"scene" : 22,
		"words" : 58,
		"chars" : 288
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 1,
		"words" : 46,
		"chars" : 191
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 2,
		"words" : 158,
		"chars" : 748
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 3,
		"words" : 121,
		"chars" : 603
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 4,
		"words" : 30,
		"chars" : 150
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 5,
		"words" : 18,
		"chars" : 88
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 6,
		"words" : 30,
		"chars" : 114
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 7,
		"words" : 75,
		"chars" : 337
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 8,
		"words" : 187,
		"chars" : 941
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 9,
		"words" : 105,
		"chars" : 415
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 10,
		"words" : 85,
		"chars" : 420
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 11,
		"words" : 110,
		"chars" : 536
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 12,
		"words" : 192,
		"chars" : 961
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 13,
		"words" : 97,
		"chars" : 360
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 14,
		"words" : 139,
		"chars" : 628
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 15,
		"words" : 13,
		"chars" : 61
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 17,
		"words" : 55,
		"chars" : 192
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 19,
		"words" : 93,
		"chars" : 445
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 20,
		"words" : 35,
		"chars" : 149
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 21,
		"words" : 42,
		"chars" : 193
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 22,
		"words" : 208,
		"chars" : 1056
	},
	{
		"season" : 3,
		"episode" : 2,
		"scene" : 23,
		"words" : 419,
		"chars" : 2128
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 2,
		"words" : 128,
		"chars" : 699
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 3,
		"words" : 72,
		"chars" : 362
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 4,
		"words" : 192,
		"chars" : 928
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 5,
		"words" : 73,
		"chars" : 366
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 6,
		"words" : 154,
		"chars" : 801
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 7,
		"words" : 63,
		"chars" : 321
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 8,
		"words" : 71,
		"chars" : 342
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 9,
		"words" : 179,
		"chars" : 908
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 10,
		"words" : 51,
		"chars" : 254
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 11,
		"words" : 114,
		"chars" : 558
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 12,
		"words" : 39,
		"chars" : 209
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 13,
		"words" : 266,
		"chars" : 1369
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 14,
		"words" : 96,
		"chars" : 448
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 15,
		"words" : 39,
		"chars" : 182
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 16,
		"words" : 76,
		"chars" : 395
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 18,
		"words" : 242,
		"chars" : 1184
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 19,
		"words" : 32,
		"chars" : 149
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 20,
		"words" : 171,
		"chars" : 894
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 21,
		"words" : 116,
		"chars" : 561
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 22,
		"words" : 181,
		"chars" : 949
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 23,
		"words" : 127,
		"chars" : 628
	},
	{
		"season" : 3,
		"episode" : 3,
		"scene" : 24,
		"words" : 180,
		"chars" : 933
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 1,
		"words" : 114,
		"chars" : 592
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 2,
		"words" : 166,
		"chars" : 823
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 3,
		"words" : 110,
		"chars" : 550
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 4,
		"words" : 185,
		"chars" : 959
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 5,
		"words" : 74,
		"chars" : 381
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 6,
		"words" : 163,
		"chars" : 841
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 7,
		"words" : 41,
		"chars" : 196
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 8,
		"words" : 105,
		"chars" : 496
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 9,
		"words" : 86,
		"chars" : 431
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 10,
		"words" : 292,
		"chars" : 1507
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 11,
		"words" : 89,
		"chars" : 473
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 12,
		"words" : 145,
		"chars" : 745
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 13,
		"words" : 55,
		"chars" : 276
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 14,
		"words" : 60,
		"chars" : 296
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 15,
		"words" : 215,
		"chars" : 1062
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 16,
		"words" : 66,
		"chars" : 301
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 17,
		"words" : 12,
		"chars" : 61
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 18,
		"words" : 144,
		"chars" : 695
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 19,
		"words" : 210,
		"chars" : 1021
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 20,
		"words" : 27,
		"chars" : 127
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 21,
		"words" : 156,
		"chars" : 767
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 22,
		"words" : 27,
		"chars" : 139
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 23,
		"words" : 7,
		"chars" : 34
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 24,
		"words" : 179,
		"chars" : 958
	},
	{
		"season" : 3,
		"episode" : 4,
		"scene" : 25,
		"words" : 332,
		"chars" : 1621
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 1,
		"words" : 6,
		"chars" : 32
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 2,
		"words" : 36,
		"chars" : 191
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 3,
		"words" : 240,
		"chars" : 1220
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 4,
		"words" : 151,
		"chars" : 779
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 5,
		"words" : 51,
		"chars" : 233
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 6,
		"words" : 148,
		"chars" : 786
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 8,
		"words" : 85,
		"chars" : 434
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 9,
		"words" : 6,
		"chars" : 39
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 10,
		"words" : 161,
		"chars" : 844
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 12,
		"words" : 149,
		"chars" : 802
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 13,
		"words" : 2,
		"chars" : 11
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 14,
		"words" : 288,
		"chars" : 1455
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 15,
		"words" : 65,
		"chars" : 330
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 16,
		"words" : 104,
		"chars" : 531
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 17,
		"words" : 24,
		"chars" : 111
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 18,
		"words" : 70,
		"chars" : 335
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 19,
		"words" : 44,
		"chars" : 223
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 20,
		"words" : 71,
		"chars" : 351
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 21,
		"words" : 182,
		"chars" : 1026
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 22,
		"words" : 204,
		"chars" : 1012
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 23,
		"words" : 142,
		"chars" : 678
	},
	{
		"season" : 3,
		"episode" : 5,
		"scene" : 24,
		"words" : 177,
		"chars" : 816
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 1,
		"words" : 74,
		"chars" : 414
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 2,
		"words" : 37,
		"chars" : 186
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 3,
		"words" : 142,
		"chars" : 750
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 4,
		"words" : 111,
		"chars" : 565
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 5,
		"words" : 64,
		"chars" : 301
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 6,
		"words" : 83,
		"chars" : 407
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 7,
		"words" : 108,
		"chars" : 521
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 8,
		"words" : 147,
		"chars" : 719
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 9,
		"words" : 120,
		"chars" : 585
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 10,
		"words" : 86,
		"chars" : 461
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 11,
		"words" : 68,
		"chars" : 344
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 12,
		"words" : 163,
		"chars" : 799
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 13,
		"words" : 11,
		"chars" : 56
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 14,
		"words" : 37,
		"chars" : 191
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 15,
		"words" : 111,
		"chars" : 551
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 16,
		"words" : 44,
		"chars" : 227
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 17,
		"words" : 77,
		"chars" : 360
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 18,
		"words" : 264,
		"chars" : 1319
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 19,
		"words" : 59,
		"chars" : 308
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 21,
		"words" : 30,
		"chars" : 155
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 22,
		"words" : 103,
		"chars" : 540
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 25,
		"words" : 144,
		"chars" : 710
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 26,
		"words" : 146,
		"chars" : 724
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 27,
		"words" : 44,
		"chars" : 225
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 28,
		"words" : 77,
		"chars" : 406
	},
	{
		"season" : 3,
		"episode" : 6,
		"scene" : 29,
		"words" : 257,
		"chars" : 1268
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 1,
		"words" : 88,
		"chars" : 451
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 2,
		"words" : 123,
		"chars" : 595
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 4,
		"words" : 18,
		"chars" : 95
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 5,
		"words" : 4,
		"chars" : 26
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 6,
		"words" : 58,
		"chars" : 267
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 7,
		"words" : 135,
		"chars" : 728
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 8,
		"words" : 155,
		"chars" : 794
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 9,
		"words" : 17,
		"chars" : 93
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 10,
		"words" : 145,
		"chars" : 727
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 11,
		"words" : 41,
		"chars" : 209
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 12,
		"words" : 22,
		"chars" : 112
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 13,
		"words" : 139,
		"chars" : 713
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 14,
		"words" : 17,
		"chars" : 107
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 15,
		"words" : 116,
		"chars" : 564
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 16,
		"words" : 132,
		"chars" : 644
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 17,
		"words" : 307,
		"chars" : 1638
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 18,
		"words" : 2,
		"chars" : 9
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 19,
		"words" : 56,
		"chars" : 268
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 20,
		"words" : 226,
		"chars" : 1107
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 21,
		"words" : 68,
		"chars" : 334
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 22,
		"words" : 152,
		"chars" : 734
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 23,
		"words" : 85,
		"chars" : 462
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 24,
		"words" : 78,
		"chars" : 395
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 25,
		"words" : 68,
		"chars" : 350
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 26,
		"words" : 32,
		"chars" : 162
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 27,
		"words" : 302,
		"chars" : 1442
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 28,
		"words" : 18,
		"chars" : 90
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 29,
		"words" : 89,
		"chars" : 418
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 30,
		"words" : 232,
		"chars" : 1194
	},
	{
		"season" : 3,
		"episode" : 7,
		"scene" : 31,
		"words" : 44,
		"chars" : 192
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 1,
		"words" : 79,
		"chars" : 410
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 2,
		"words" : 240,
		"chars" : 1227
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 3,
		"words" : 74,
		"chars" : 399
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 4,
		"words" : 83,
		"chars" : 451
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 5,
		"words" : 105,
		"chars" : 576
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 6,
		"words" : 191,
		"chars" : 971
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 7,
		"words" : 12,
		"chars" : 64
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 8,
		"words" : 80,
		"chars" : 443
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 9,
		"words" : 120,
		"chars" : 573
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 10,
		"words" : 46,
		"chars" : 229
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 11,
		"words" : 281,
		"chars" : 1532
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 12,
		"words" : 224,
		"chars" : 1008
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 13,
		"words" : 73,
		"chars" : 396
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 14,
		"words" : 246,
		"chars" : 1342
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 15,
		"words" : 123,
		"chars" : 635
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 16,
		"words" : 231,
		"chars" : 1138
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 17,
		"words" : 19,
		"chars" : 94
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 18,
		"words" : 239,
		"chars" : 1220
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 20,
		"words" : 341,
		"chars" : 1744
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 21,
		"words" : 96,
		"chars" : 473
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 22,
		"words" : 34,
		"chars" : 160
	},
	{
		"season" : 3,
		"episode" : 8,
		"scene" : 23,
		"words" : 369,
		"chars" : 1871
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 1,
		"words" : 140,
		"chars" : 672
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 2,
		"words" : 140,
		"chars" : 676
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 3,
		"words" : 51,
		"chars" : 278
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 4,
		"words" : 93,
		"chars" : 498
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 5,
		"words" : 106,
		"chars" : 520
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 6,
		"words" : 162,
		"chars" : 848
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 7,
		"words" : 140,
		"chars" : 668
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 8,
		"words" : 120,
		"chars" : 590
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 9,
		"words" : 91,
		"chars" : 446
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 10,
		"words" : 170,
		"chars" : 884
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 11,
		"words" : 98,
		"chars" : 480
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 12,
		"words" : 90,
		"chars" : 455
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 13,
		"words" : 148,
		"chars" : 717
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 14,
		"words" : 187,
		"chars" : 938
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 15,
		"words" : 200,
		"chars" : 1047
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 16,
		"words" : 144,
		"chars" : 675
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 17,
		"words" : 58,
		"chars" : 311
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 18,
		"words" : 36,
		"chars" : 188
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 19,
		"words" : 119,
		"chars" : 561
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 20,
		"words" : 184,
		"chars" : 900
	},
	{
		"season" : 3,
		"episode" : 9,
		"scene" : 21,
		"words" : 27,
		"chars" : 131
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 1,
		"words" : 191,
		"chars" : 978
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 2,
		"words" : 83,
		"chars" : 424
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 3,
		"words" : 140,
		"chars" : 717
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 4,
		"words" : 271,
		"chars" : 1483
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 6,
		"words" : 189,
		"chars" : 914
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 7,
		"words" : 237,
		"chars" : 1214
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 9,
		"words" : 146,
		"chars" : 764
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 10,
		"words" : 57,
		"chars" : 272
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 11,
		"words" : 103,
		"chars" : 516
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 12,
		"words" : 165,
		"chars" : 856
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 13,
		"words" : 155,
		"chars" : 759
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 14,
		"words" : 295,
		"chars" : 1499
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 15,
		"words" : 10,
		"chars" : 47
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 16,
		"words" : 101,
		"chars" : 518
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 17,
		"words" : 205,
		"chars" : 1025
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 18,
		"words" : 76,
		"chars" : 408
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 19,
		"words" : 177,
		"chars" : 899
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 20,
		"words" : 32,
		"chars" : 183
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 21,
		"words" : 159,
		"chars" : 815
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 22,
		"words" : 82,
		"chars" : 407
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 23,
		"words" : 8,
		"chars" : 34
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 24,
		"words" : 187,
		"chars" : 921
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 25,
		"words" : 152,
		"chars" : 750
	},
	{
		"season" : 3,
		"episode" : 10,
		"scene" : 27,
		"words" : 234,
		"chars" : 1165
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 1,
		"words" : 162,
		"chars" : 814
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 2,
		"words" : 95,
		"chars" : 495
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 3,
		"words" : 190,
		"chars" : 935
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 4,
		"words" : 143,
		"chars" : 766
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 5,
		"words" : 10,
		"chars" : 49
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 6,
		"words" : 103,
		"chars" : 521
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 7,
		"words" : 117,
		"chars" : 546
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 8,
		"words" : 363,
		"chars" : 1963
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 9,
		"words" : 61,
		"chars" : 292
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 10,
		"words" : 195,
		"chars" : 1012
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 11,
		"words" : 70,
		"chars" : 342
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 12,
		"words" : 174,
		"chars" : 887
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 13,
		"words" : 186,
		"chars" : 952
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 14,
		"words" : 86,
		"chars" : 462
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 15,
		"words" : 97,
		"chars" : 459
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 16,
		"words" : 274,
		"chars" : 1407
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 17,
		"words" : 136,
		"chars" : 667
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 18,
		"words" : 24,
		"chars" : 115
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 19,
		"words" : 223,
		"chars" : 1200
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 20,
		"words" : 281,
		"chars" : 1348
	},
	{
		"season" : 3,
		"episode" : 11,
		"scene" : 21,
		"words" : 109,
		"chars" : 566
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 1,
		"words" : 2,
		"chars" : 9
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 2,
		"words" : 139,
		"chars" : 709
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 3,
		"words" : 167,
		"chars" : 874
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 4,
		"words" : 133,
		"chars" : 637
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 5,
		"words" : 248,
		"chars" : 1278
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 6,
		"words" : 172,
		"chars" : 886
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 7,
		"words" : 88,
		"chars" : 469
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 8,
		"words" : 291,
		"chars" : 1449
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 9,
		"words" : 92,
		"chars" : 473
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 10,
		"words" : 219,
		"chars" : 1158
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 11,
		"words" : 122,
		"chars" : 565
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 12,
		"words" : 121,
		"chars" : 637
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 13,
		"words" : 206,
		"chars" : 1006
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 14,
		"words" : 190,
		"chars" : 972
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 15,
		"words" : 174,
		"chars" : 877
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 16,
		"words" : 67,
		"chars" : 345
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 17,
		"words" : 55,
		"chars" : 291
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 18,
		"words" : 49,
		"chars" : 229
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 19,
		"words" : 354,
		"chars" : 1753
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 20,
		"words" : 128,
		"chars" : 645
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 21,
		"words" : 61,
		"chars" : 312
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 22,
		"words" : 151,
		"chars" : 746
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 23,
		"words" : 153,
		"chars" : 780
	},
	{
		"season" : 3,
		"episode" : 12,
		"scene" : 24,
		"words" : 6,
		"chars" : 31
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 1,
		"words" : 142,
		"chars" : 830
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 2,
		"words" : 54,
		"chars" : 283
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 3,
		"words" : 176,
		"chars" : 907
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 4,
		"words" : 110,
		"chars" : 568
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 5,
		"words" : 189,
		"chars" : 971
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 6,
		"words" : 122,
		"chars" : 599
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 7,
		"words" : 39,
		"chars" : 194
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 8,
		"words" : 238,
		"chars" : 1203
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 9,
		"words" : 240,
		"chars" : 1184
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 10,
		"words" : 211,
		"chars" : 1102
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 11,
		"words" : 216,
		"chars" : 1023
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 12,
		"words" : 137,
		"chars" : 707
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 13,
		"words" : 155,
		"chars" : 806
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 14,
		"words" : 76,
		"chars" : 356
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 15,
		"words" : 385,
		"chars" : 2009
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 16,
		"words" : 185,
		"chars" : 936
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 17,
		"words" : 113,
		"chars" : 535
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 18,
		"words" : 27,
		"chars" : 132
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 19,
		"words" : 220,
		"chars" : 1101
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 20,
		"words" : 191,
		"chars" : 968
	},
	{
		"season" : 3,
		"episode" : 13,
		"scene" : 21,
		"words" : 401,
		"chars" : 2050
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 2,
		"words" : 188,
		"chars" : 1003
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 3,
		"words" : 59,
		"chars" : 299
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 4,
		"words" : 185,
		"chars" : 978
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 5,
		"words" : 145,
		"chars" : 815
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 6,
		"words" : 152,
		"chars" : 843
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 7,
		"words" : 78,
		"chars" : 367
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 8,
		"words" : 27,
		"chars" : 138
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 9,
		"words" : 76,
		"chars" : 406
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 10,
		"words" : 287,
		"chars" : 1483
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 11,
		"words" : 109,
		"chars" : 596
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 12,
		"words" : 147,
		"chars" : 750
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 13,
		"words" : 184,
		"chars" : 925
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 14,
		"words" : 216,
		"chars" : 1167
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 15,
		"words" : 105,
		"chars" : 541
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 16,
		"words" : 78,
		"chars" : 385
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 17,
		"words" : 9,
		"chars" : 57
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 18,
		"words" : 162,
		"chars" : 801
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 19,
		"words" : 80,
		"chars" : 427
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 20,
		"words" : 109,
		"chars" : 521
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 21,
		"words" : 99,
		"chars" : 510
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 22,
		"words" : 140,
		"chars" : 718
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 23,
		"words" : 58,
		"chars" : 326
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 24,
		"words" : 23,
		"chars" : 124
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 25,
		"words" : 151,
		"chars" : 760
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 26,
		"words" : 86,
		"chars" : 437
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 27,
		"words" : 90,
		"chars" : 422
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 28,
		"words" : 53,
		"chars" : 266
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 29,
		"words" : 59,
		"chars" : 302
	},
	{
		"season" : 3,
		"episode" : 14,
		"scene" : 30,
		"words" : 259,
		"chars" : 1307
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 1,
		"words" : 12,
		"chars" : 65
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 2,
		"words" : 35,
		"chars" : 175
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 3,
		"words" : 179,
		"chars" : 906
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 4,
		"words" : 161,
		"chars" : 831
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 5,
		"words" : 184,
		"chars" : 988
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 7,
		"words" : 193,
		"chars" : 965
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 9,
		"words" : 108,
		"chars" : 541
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 10,
		"words" : 166,
		"chars" : 827
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 11,
		"words" : 35,
		"chars" : 166
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 12,
		"words" : 227,
		"chars" : 1058
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 13,
		"words" : 156,
		"chars" : 748
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 14,
		"words" : 32,
		"chars" : 151
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 15,
		"words" : 184,
		"chars" : 927
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 16,
		"words" : 172,
		"chars" : 841
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 17,
		"words" : 99,
		"chars" : 502
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 18,
		"words" : 8,
		"chars" : 49
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 19,
		"words" : 29,
		"chars" : 153
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 20,
		"words" : 166,
		"chars" : 781
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 21,
		"words" : 211,
		"chars" : 1041
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 22,
		"words" : 185,
		"chars" : 986
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 23,
		"words" : 16,
		"chars" : 83
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 24,
		"words" : 83,
		"chars" : 387
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 25,
		"words" : 78,
		"chars" : 384
	},
	{
		"season" : 3,
		"episode" : 15,
		"scene" : 26,
		"words" : 60,
		"chars" : 307
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 1,
		"words" : 19,
		"chars" : 93
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 2,
		"words" : 64,
		"chars" : 309
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 3,
		"words" : 41,
		"chars" : 217
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 4,
		"words" : 227,
		"chars" : 1160
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 5,
		"words" : 56,
		"chars" : 287
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 6,
		"words" : 87,
		"chars" : 451
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 7,
		"words" : 75,
		"chars" : 378
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 8,
		"words" : 337,
		"chars" : 1749
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 9,
		"words" : 69,
		"chars" : 346
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 10,
		"words" : 101,
		"chars" : 492
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 11,
		"words" : 82,
		"chars" : 394
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 12,
		"words" : 19,
		"chars" : 94
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 13,
		"words" : 300,
		"chars" : 1479
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 14,
		"words" : 352,
		"chars" : 1736
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 15,
		"words" : 301,
		"chars" : 1639
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 16,
		"words" : 38,
		"chars" : 186
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 17,
		"words" : 13,
		"chars" : 71
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 18,
		"words" : 255,
		"chars" : 1194
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 19,
		"words" : 212,
		"chars" : 1093
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 20,
		"words" : 64,
		"chars" : 341
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 21,
		"words" : 230,
		"chars" : 1226
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 22,
		"words" : 96,
		"chars" : 472
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 23,
		"words" : 129,
		"chars" : 693
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 24,
		"words" : 5,
		"chars" : 23
	},
	{
		"season" : 3,
		"episode" : 16,
		"scene" : 25,
		"words" : 157,
		"chars" : 764
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 1,
		"words" : 151,
		"chars" : 801
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 2,
		"words" : 54,
		"chars" : 290
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 3,
		"words" : 86,
		"chars" : 445
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 4,
		"words" : 244,
		"chars" : 1263
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 5,
		"words" : 128,
		"chars" : 637
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 6,
		"words" : 113,
		"chars" : 582
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 7,
		"words" : 110,
		"chars" : 568
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 8,
		"words" : 88,
		"chars" : 451
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 9,
		"words" : 128,
		"chars" : 693
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 10,
		"words" : 112,
		"chars" : 577
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 11,
		"words" : 190,
		"chars" : 922
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 12,
		"words" : 158,
		"chars" : 821
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 13,
		"words" : 12,
		"chars" : 59
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 14,
		"words" : 274,
		"chars" : 1372
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 15,
		"words" : 69,
		"chars" : 363
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 16,
		"words" : 109,
		"chars" : 582
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 17,
		"words" : 161,
		"chars" : 811
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 18,
		"words" : 72,
		"chars" : 350
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 19,
		"words" : 90,
		"chars" : 479
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 20,
		"words" : 213,
		"chars" : 1075
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 21,
		"words" : 192,
		"chars" : 1028
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 22,
		"words" : 46,
		"chars" : 218
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 23,
		"words" : 177,
		"chars" : 903
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 24,
		"words" : 46,
		"chars" : 229
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 25,
		"words" : 270,
		"chars" : 1388
	},
	{
		"season" : 3,
		"episode" : 17,
		"scene" : 26,
		"words" : 25,
		"chars" : 142
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 1,
		"words" : 104,
		"chars" : 535
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 2,
		"words" : 171,
		"chars" : 641
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 3,
		"words" : 234,
		"chars" : 1153
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 4,
		"words" : 96,
		"chars" : 363
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 5,
		"words" : 240,
		"chars" : 1262
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 6,
		"words" : 90,
		"chars" : 467
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 7,
		"words" : 166,
		"chars" : 820
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 9,
		"words" : 6,
		"chars" : 26
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 10,
		"words" : 108,
		"chars" : 445
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 11,
		"words" : 61,
		"chars" : 294
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 12,
		"words" : 149,
		"chars" : 765
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 13,
		"words" : 146,
		"chars" : 563
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 14,
		"words" : 116,
		"chars" : 561
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 15,
		"words" : 148,
		"chars" : 739
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 16,
		"words" : 181,
		"chars" : 894
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 17,
		"words" : 155,
		"chars" : 764
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 18,
		"words" : 99,
		"chars" : 364
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 19,
		"words" : 86,
		"chars" : 426
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 20,
		"words" : 43,
		"chars" : 146
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 21,
		"words" : 84,
		"chars" : 425
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 22,
		"words" : 52,
		"chars" : 288
	},
	{
		"season" : 3,
		"episode" : 18,
		"scene" : 23,
		"words" : 181,
		"chars" : 911
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 1,
		"words" : 7,
		"chars" : 42
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 2,
		"words" : 136,
		"chars" : 665
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 3,
		"words" : 83,
		"chars" : 408
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 4,
		"words" : 192,
		"chars" : 958
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 5,
		"words" : 311,
		"chars" : 1598
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 6,
		"words" : 158,
		"chars" : 807
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 7,
		"words" : 260,
		"chars" : 1286
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 8,
		"words" : 9,
		"chars" : 44
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 9,
		"words" : 282,
		"chars" : 1538
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 10,
		"words" : 72,
		"chars" : 339
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 11,
		"words" : 186,
		"chars" : 961
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 12,
		"words" : 98,
		"chars" : 505
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 13,
		"words" : 111,
		"chars" : 568
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 14,
		"words" : 47,
		"chars" : 249
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 15,
		"words" : 208,
		"chars" : 1101
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 16,
		"words" : 427,
		"chars" : 2124
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 17,
		"words" : 116,
		"chars" : 619
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 18,
		"words" : 238,
		"chars" : 1196
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 19,
		"words" : 192,
		"chars" : 957
	},
	{
		"season" : 3,
		"episode" : 19,
		"scene" : 20,
		"words" : 151,
		"chars" : 736
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 1,
		"words" : 160,
		"chars" : 807
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 2,
		"words" : 102,
		"chars" : 529
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 3,
		"words" : 256,
		"chars" : 1265
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 4,
		"words" : 114,
		"chars" : 608
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 5,
		"words" : 216,
		"chars" : 1167
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 6,
		"words" : 77,
		"chars" : 368
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 7,
		"words" : 187,
		"chars" : 954
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 8,
		"words" : 33,
		"chars" : 178
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 9,
		"words" : 87,
		"chars" : 482
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 10,
		"words" : 147,
		"chars" : 759
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 11,
		"words" : 94,
		"chars" : 469
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 12,
		"words" : 84,
		"chars" : 414
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 13,
		"words" : 23,
		"chars" : 123
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 14,
		"words" : 60,
		"chars" : 317
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 15,
		"words" : 4,
		"chars" : 21
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 16,
		"words" : 315,
		"chars" : 1629
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 17,
		"words" : 192,
		"chars" : 933
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 18,
		"words" : 244,
		"chars" : 1263
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 19,
		"words" : 128,
		"chars" : 642
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 20,
		"words" : 81,
		"chars" : 445
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 21,
		"words" : 112,
		"chars" : 561
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 22,
		"words" : 13,
		"chars" : 61
	},
	{
		"season" : 3,
		"episode" : 20,
		"scene" : 23,
		"words" : 134,
		"chars" : 662
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 2,
		"words" : 323,
		"chars" : 1700
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 3,
		"words" : 115,
		"chars" : 586
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 4,
		"words" : 134,
		"chars" : 684
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 5,
		"words" : 232,
		"chars" : 1185
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 6,
		"words" : 170,
		"chars" : 872
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 7,
		"words" : 76,
		"chars" : 389
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 8,
		"words" : 91,
		"chars" : 461
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 9,
		"words" : 317,
		"chars" : 1611
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 10,
		"words" : 166,
		"chars" : 808
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 11,
		"words" : 252,
		"chars" : 1248
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 12,
		"words" : 225,
		"chars" : 1152
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 13,
		"words" : 209,
		"chars" : 1119
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 14,
		"words" : 91,
		"chars" : 466
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 15,
		"words" : 108,
		"chars" : 517
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 16,
		"words" : 63,
		"chars" : 336
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 17,
		"words" : 241,
		"chars" : 1258
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 18,
		"words" : 95,
		"chars" : 492
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 19,
		"words" : 38,
		"chars" : 185
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 20,
		"words" : 32,
		"chars" : 162
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 21,
		"words" : 4,
		"chars" : 18
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 22,
		"words" : 95,
		"chars" : 494
	},
	{
		"season" : 3,
		"episode" : 21,
		"scene" : 23,
		"words" : 128,
		"chars" : 660
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 1,
		"words" : 105,
		"chars" : 569
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 2,
		"words" : 32,
		"chars" : 164
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 3,
		"words" : 318,
		"chars" : 1606
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 4,
		"words" : 102,
		"chars" : 504
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 5,
		"words" : 150,
		"chars" : 748
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 6,
		"words" : 64,
		"chars" : 314
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 7,
		"words" : 145,
		"chars" : 762
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 8,
		"words" : 126,
		"chars" : 649
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 9,
		"words" : 130,
		"chars" : 673
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 10,
		"words" : 437,
		"chars" : 2176
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 11,
		"words" : 144,
		"chars" : 757
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 12,
		"words" : 353,
		"chars" : 1910
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 13,
		"words" : 155,
		"chars" : 756
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 14,
		"words" : 565,
		"chars" : 2798
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 15,
		"words" : 93,
		"chars" : 449
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 16,
		"words" : 39,
		"chars" : 176
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 17,
		"words" : 78,
		"chars" : 352
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 18,
		"words" : 63,
		"chars" : 322
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 19,
		"words" : 192,
		"chars" : 996
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 20,
		"words" : 62,
		"chars" : 314
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 21,
		"words" : 144,
		"chars" : 764
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 22,
		"words" : 614,
		"chars" : 3196
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 23,
		"words" : 131,
		"chars" : 661
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 24,
		"words" : 441,
		"chars" : 2198
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 25,
		"words" : 149,
		"chars" : 782
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 26,
		"words" : 174,
		"chars" : 961
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 27,
		"words" : 355,
		"chars" : 1831
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 28,
		"words" : 37,
		"chars" : 188
	},
	{
		"season" : 3,
		"episode" : 22,
		"scene" : 29,
		"words" : 179,
		"chars" : 865
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 1,
		"words" : 177,
		"chars" : 899
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 2,
		"words" : 233,
		"chars" : 1213
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 3,
		"words" : 302,
		"chars" : 1500
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 4,
		"words" : 201,
		"chars" : 1023
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 5,
		"words" : 77,
		"chars" : 381
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 6,
		"words" : 85,
		"chars" : 477
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 7,
		"words" : 212,
		"chars" : 1095
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 8,
		"words" : 38,
		"chars" : 192
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 9,
		"words" : 208,
		"chars" : 1073
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 10,
		"words" : 64,
		"chars" : 327
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 11,
		"words" : 120,
		"chars" : 607
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 12,
		"words" : 233,
		"chars" : 1157
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 13,
		"words" : 18,
		"chars" : 124
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 14,
		"words" : 106,
		"chars" : 557
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 15,
		"words" : 84,
		"chars" : 409
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 16,
		"words" : 260,
		"chars" : 1236
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 17,
		"words" : 32,
		"chars" : 158
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 18,
		"words" : 365,
		"chars" : 1824
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 19,
		"words" : 174,
		"chars" : 871
	},
	{
		"season" : 4,
		"episode" : 1,
		"scene" : 20,
		"words" : 32,
		"chars" : 176
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 1,
		"words" : 112,
		"chars" : 614
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 2,
		"words" : 94,
		"chars" : 542
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 3,
		"words" : 46,
		"chars" : 226
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 4,
		"words" : 263,
		"chars" : 1311
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 5,
		"words" : 129,
		"chars" : 687
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 6,
		"words" : 74,
		"chars" : 392
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 7,
		"words" : 89,
		"chars" : 469
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 8,
		"words" : 121,
		"chars" : 588
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 9,
		"words" : 68,
		"chars" : 357
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 10,
		"words" : 183,
		"chars" : 949
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 11,
		"words" : 150,
		"chars" : 743
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 12,
		"words" : 242,
		"chars" : 1272
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 13,
		"words" : 167,
		"chars" : 860
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 14,
		"words" : 105,
		"chars" : 538
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 15,
		"words" : 3,
		"chars" : 15
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 16,
		"words" : 178,
		"chars" : 897
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 17,
		"words" : 183,
		"chars" : 932
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 18,
		"words" : 59,
		"chars" : 334
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 19,
		"words" : 264,
		"chars" : 1508
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 21,
		"words" : 122,
		"chars" : 628
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 22,
		"words" : 76,
		"chars" : 389
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 23,
		"words" : 169,
		"chars" : 973
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 24,
		"words" : 282,
		"chars" : 1465
	},
	{
		"season" : 4,
		"episode" : 2,
		"scene" : 25,
		"words" : 298,
		"chars" : 1580
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 1,
		"words" : 292,
		"chars" : 1484
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 2,
		"words" : 210,
		"chars" : 1074
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 3,
		"words" : 186,
		"chars" : 991
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 4,
		"words" : 5,
		"chars" : 26
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 5,
		"words" : 160,
		"chars" : 804
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 6,
		"words" : 320,
		"chars" : 1590
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 7,
		"words" : 124,
		"chars" : 612
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 8,
		"words" : 118,
		"chars" : 608
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 9,
		"words" : 142,
		"chars" : 698
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 10,
		"words" : 211,
		"chars" : 1126
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 11,
		"words" : 28,
		"chars" : 156
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 12,
		"words" : 186,
		"chars" : 934
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 13,
		"words" : 77,
		"chars" : 387
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 14,
		"words" : 24,
		"chars" : 134
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 15,
		"words" : 96,
		"chars" : 500
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 16,
		"words" : 153,
		"chars" : 793
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 17,
		"words" : 227,
		"chars" : 1130
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 18,
		"words" : 337,
		"chars" : 1659
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 19,
		"words" : 275,
		"chars" : 1376
	},
	{
		"season" : 4,
		"episode" : 3,
		"scene" : 20,
		"words" : 119,
		"chars" : 603
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 1,
		"words" : 165,
		"chars" : 846
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 2,
		"words" : 122,
		"chars" : 625
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 3,
		"words" : 46,
		"chars" : 249
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 4,
		"words" : 162,
		"chars" : 952
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 5,
		"words" : 71,
		"chars" : 386
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 6,
		"words" : 163,
		"chars" : 795
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 7,
		"words" : 96,
		"chars" : 438
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 8,
		"words" : 211,
		"chars" : 1083
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 9,
		"words" : 67,
		"chars" : 350
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 10,
		"words" : 110,
		"chars" : 540
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 11,
		"words" : 427,
		"chars" : 2232
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 12,
		"words" : 148,
		"chars" : 729
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 13,
		"words" : 220,
		"chars" : 1089
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 14,
		"words" : 4,
		"chars" : 15
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 15,
		"words" : 311,
		"chars" : 1544
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 16,
		"words" : 127,
		"chars" : 626
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 17,
		"words" : 174,
		"chars" : 848
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 18,
		"words" : 68,
		"chars" : 355
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 19,
		"words" : 153,
		"chars" : 863
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 20,
		"words" : 137,
		"chars" : 747
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 21,
		"words" : 215,
		"chars" : 1075
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 22,
		"words" : 82,
		"chars" : 436
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 23,
		"words" : 171,
		"chars" : 883
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 24,
		"words" : 139,
		"chars" : 685
	},
	{
		"season" : 4,
		"episode" : 4,
		"scene" : 25,
		"words" : 37,
		"chars" : 173
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 1,
		"words" : 71,
		"chars" : 351
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 2,
		"words" : 109,
		"chars" : 542
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 3,
		"words" : 59,
		"chars" : 301
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 4,
		"words" : 24,
		"chars" : 123
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 5,
		"words" : 186,
		"chars" : 966
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 6,
		"words" : 217,
		"chars" : 1102
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 7,
		"words" : 51,
		"chars" : 287
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 8,
		"words" : 99,
		"chars" : 511
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 9,
		"words" : 160,
		"chars" : 806
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 10,
		"words" : 211,
		"chars" : 1139
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 11,
		"words" : 152,
		"chars" : 762
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 12,
		"words" : 120,
		"chars" : 632
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 13,
		"words" : 228,
		"chars" : 1209
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 14,
		"words" : 167,
		"chars" : 886
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 15,
		"words" : 198,
		"chars" : 1045
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 16,
		"words" : 281,
		"chars" : 1449
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 17,
		"words" : 183,
		"chars" : 951
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 18,
		"words" : 293,
		"chars" : 1620
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 19,
		"words" : 135,
		"chars" : 704
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 20,
		"words" : 188,
		"chars" : 1040
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 21,
		"words" : 88,
		"chars" : 458
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 22,
		"words" : 173,
		"chars" : 909
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 23,
		"words" : 337,
		"chars" : 1702
	},
	{
		"season" : 4,
		"episode" : 5,
		"scene" : 24,
		"words" : 221,
		"chars" : 1145
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 1,
		"words" : 186,
		"chars" : 971
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 2,
		"words" : 112,
		"chars" : 607
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 3,
		"words" : 93,
		"chars" : 481
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 4,
		"words" : 34,
		"chars" : 159
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 5,
		"words" : 124,
		"chars" : 616
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 6,
		"words" : 225,
		"chars" : 1131
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 7,
		"words" : 79,
		"chars" : 392
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 8,
		"words" : 42,
		"chars" : 199
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 9,
		"words" : 114,
		"chars" : 593
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 10,
		"words" : 67,
		"chars" : 359
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 11,
		"words" : 123,
		"chars" : 644
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 12,
		"words" : 161,
		"chars" : 838
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 13,
		"words" : 168,
		"chars" : 850
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 14,
		"words" : 253,
		"chars" : 1326
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 15,
		"words" : 176,
		"chars" : 873
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 16,
		"words" : 71,
		"chars" : 372
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 17,
		"words" : 122,
		"chars" : 665
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 18,
		"words" : 86,
		"chars" : 434
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 19,
		"words" : 239,
		"chars" : 1243
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 20,
		"words" : 92,
		"chars" : 465
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 22,
		"words" : 68,
		"chars" : 328
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 23,
		"words" : 157,
		"chars" : 849
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 24,
		"words" : 49,
		"chars" : 335
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 25,
		"words" : 178,
		"chars" : 974
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 26,
		"words" : 45,
		"chars" : 245
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 27,
		"words" : 156,
		"chars" : 817
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 28,
		"words" : 162,
		"chars" : 801
	},
	{
		"season" : 4,
		"episode" : 6,
		"scene" : 29,
		"words" : 35,
		"chars" : 164
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 1,
		"words" : 10,
		"chars" : 51
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 2,
		"words" : 164,
		"chars" : 841
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 3,
		"words" : 95,
		"chars" : 368
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 4,
		"words" : 16,
		"chars" : 64
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 5,
		"words" : 60,
		"chars" : 248
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 6,
		"words" : 9,
		"chars" : 32
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 7,
		"words" : 119,
		"chars" : 597
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 8,
		"words" : 35,
		"chars" : 181
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 9,
		"words" : 63,
		"chars" : 323
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 10,
		"words" : 112,
		"chars" : 546
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 11,
		"words" : 193,
		"chars" : 1023
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 12,
		"words" : 7,
		"chars" : 25
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 13,
		"words" : 96,
		"chars" : 376
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 14,
		"words" : 75,
		"chars" : 279
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 15,
		"words" : 151,
		"chars" : 756
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 16,
		"words" : 70,
		"chars" : 285
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 17,
		"words" : 182,
		"chars" : 943
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 18,
		"words" : 55,
		"chars" : 320
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 19,
		"words" : 133,
		"chars" : 677
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 20,
		"words" : 179,
		"chars" : 893
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 21,
		"words" : 168,
		"chars" : 943
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 22,
		"words" : 150,
		"chars" : 738
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 23,
		"words" : 78,
		"chars" : 299
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 24,
		"words" : 95,
		"chars" : 478
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 25,
		"words" : 135,
		"chars" : 518
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 26,
		"words" : 70,
		"chars" : 285
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 27,
		"words" : 63,
		"chars" : 310
	},
	{
		"season" : 4,
		"episode" : 7,
		"scene" : 28,
		"words" : 40,
		"chars" : 162
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 1,
		"words" : 213,
		"chars" : 1065
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 2,
		"words" : 99,
		"chars" : 513
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 3,
		"words" : 107,
		"chars" : 543
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 4,
		"words" : 207,
		"chars" : 1017
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 5,
		"words" : 13,
		"chars" : 62
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 6,
		"words" : 104,
		"chars" : 548
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 8,
		"words" : 2,
		"chars" : 9
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 9,
		"words" : 50,
		"chars" : 244
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 10,
		"words" : 89,
		"chars" : 432
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 11,
		"words" : 153,
		"chars" : 721
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 12,
		"words" : 65,
		"chars" : 290
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 13,
		"words" : 32,
		"chars" : 152
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 14,
		"words" : 225,
		"chars" : 1110
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 15,
		"words" : 135,
		"chars" : 844
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 16,
		"words" : 412,
		"chars" : 2108
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 17,
		"words" : 282,
		"chars" : 1466
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 18,
		"words" : 194,
		"chars" : 1035
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 20,
		"words" : 55,
		"chars" : 286
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 21,
		"words" : 27,
		"chars" : 135
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 22,
		"words" : 99,
		"chars" : 524
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 23,
		"words" : 284,
		"chars" : 1411
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 24,
		"words" : 97,
		"chars" : 510
	},
	{
		"season" : 4,
		"episode" : 8,
		"scene" : 25,
		"words" : 160,
		"chars" : 763
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 1,
		"words" : 133,
		"chars" : 662
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 2,
		"words" : 61,
		"chars" : 349
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 3,
		"words" : 31,
		"chars" : 162
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 4,
		"words" : 13,
		"chars" : 53
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 5,
		"words" : 50,
		"chars" : 260
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 6,
		"words" : 67,
		"chars" : 337
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 7,
		"words" : 149,
		"chars" : 801
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 8,
		"words" : 123,
		"chars" : 623
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 9,
		"words" : 34,
		"chars" : 175
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 10,
		"words" : 34,
		"chars" : 175
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 11,
		"words" : 72,
		"chars" : 384
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 12,
		"words" : 106,
		"chars" : 531
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 13,
		"words" : 24,
		"chars" : 141
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 14,
		"words" : 11,
		"chars" : 52
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 15,
		"words" : 4,
		"chars" : 19
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 16,
		"words" : 113,
		"chars" : 539
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 17,
		"words" : 186,
		"chars" : 925
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 18,
		"words" : 426,
		"chars" : 2224
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 19,
		"words" : 112,
		"chars" : 547
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 20,
		"words" : 154,
		"chars" : 707
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 21,
		"words" : 169,
		"chars" : 785
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 22,
		"words" : 106,
		"chars" : 567
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 23,
		"words" : 247,
		"chars" : 1163
	},
	{
		"season" : 4,
		"episode" : 9,
		"scene" : 24,
		"words" : 302,
		"chars" : 1470
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 1,
		"words" : 224,
		"chars" : 1076
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 2,
		"words" : 71,
		"chars" : 376
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 3,
		"words" : 163,
		"chars" : 792
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 4,
		"words" : 74,
		"chars" : 349
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 5,
		"words" : 158,
		"chars" : 767
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 6,
		"words" : 75,
		"chars" : 392
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 7,
		"words" : 250,
		"chars" : 1277
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 8,
		"words" : 52,
		"chars" : 261
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 9,
		"words" : 101,
		"chars" : 533
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 10,
		"words" : 136,
		"chars" : 668
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 11,
		"words" : 85,
		"chars" : 415
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 12,
		"words" : 255,
		"chars" : 1287
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 13,
		"words" : 38,
		"chars" : 174
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 14,
		"words" : 62,
		"chars" : 252
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 15,
		"words" : 203,
		"chars" : 953
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 16,
		"words" : 140,
		"chars" : 668
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 18,
		"words" : 94,
		"chars" : 418
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 19,
		"words" : 113,
		"chars" : 469
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 20,
		"words" : 192,
		"chars" : 943
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 21,
		"words" : 150,
		"chars" : 767
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 22,
		"words" : 95,
		"chars" : 448
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 23,
		"words" : 1,
		"chars" : 4
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 24,
		"words" : 27,
		"chars" : 114
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 25,
		"words" : 128,
		"chars" : 613
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 26,
		"words" : 294,
		"chars" : 1346
	},
	{
		"season" : 4,
		"episode" : 10,
		"scene" : 27,
		"words" : 79,
		"chars" : 398
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 1,
		"words" : 61,
		"chars" : 285
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 2,
		"words" : 62,
		"chars" : 305
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 3,
		"words" : 25,
		"chars" : 129
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 4,
		"words" : 79,
		"chars" : 373
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 5,
		"words" : 155,
		"chars" : 755
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 6,
		"words" : 5,
		"chars" : 32
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 7,
		"words" : 132,
		"chars" : 582
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 8,
		"words" : 73,
		"chars" : 329
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 9,
		"words" : 100,
		"chars" : 487
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 10,
		"words" : 37,
		"chars" : 170
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 11,
		"words" : 134,
		"chars" : 654
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 12,
		"words" : 156,
		"chars" : 769
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 13,
		"words" : 204,
		"chars" : 995
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 14,
		"words" : 121,
		"chars" : 619
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 15,
		"words" : 230,
		"chars" : 1183
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 16,
		"words" : 165,
		"chars" : 799
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 17,
		"words" : 180,
		"chars" : 841
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 18,
		"words" : 45,
		"chars" : 214
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 19,
		"words" : 214,
		"chars" : 1095
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 20,
		"words" : 152,
		"chars" : 727
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 21,
		"words" : 96,
		"chars" : 446
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 22,
		"words" : 114,
		"chars" : 568
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 23,
		"words" : 277,
		"chars" : 1329
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 24,
		"words" : 219,
		"chars" : 1039
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 25,
		"words" : 69,
		"chars" : 296
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 26,
		"words" : 186,
		"chars" : 884
	},
	{
		"season" : 4,
		"episode" : 11,
		"scene" : 27,
		"words" : 19,
		"chars" : 85
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 1,
		"words" : 47,
		"chars" : 221
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 2,
		"words" : 156,
		"chars" : 797
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 4,
		"words" : 220,
		"chars" : 1097
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 5,
		"words" : 38,
		"chars" : 198
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 6,
		"words" : 336,
		"chars" : 1654
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 7,
		"words" : 637,
		"chars" : 3316
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 8,
		"words" : 33,
		"chars" : 154
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 9,
		"words" : 2,
		"chars" : 13
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 10,
		"words" : 77,
		"chars" : 388
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 11,
		"words" : 145,
		"chars" : 744
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 12,
		"words" : 242,
		"chars" : 1115
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 13,
		"words" : 141,
		"chars" : 533
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 14,
		"words" : 65,
		"chars" : 316
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 15,
		"words" : 92,
		"chars" : 480
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 16,
		"words" : 185,
		"chars" : 839
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 17,
		"words" : 203,
		"chars" : 1031
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 18,
		"words" : 47,
		"chars" : 223
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 19,
		"words" : 93,
		"chars" : 476
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 20,
		"words" : 230,
		"chars" : 1145
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 21,
		"words" : 101,
		"chars" : 469
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 22,
		"words" : 253,
		"chars" : 1200
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 23,
		"words" : 114,
		"chars" : 513
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 24,
		"words" : 70,
		"chars" : 378
	},
	{
		"season" : 4,
		"episode" : 12,
		"scene" : 25,
		"words" : 184,
		"chars" : 900
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 1,
		"words" : 160,
		"chars" : 726
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 2,
		"words" : 92,
		"chars" : 448
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 3,
		"words" : 3,
		"chars" : 18
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 4,
		"words" : 259,
		"chars" : 1246
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 5,
		"words" : 337,
		"chars" : 1648
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 6,
		"words" : 48,
		"chars" : 229
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 7,
		"words" : 470,
		"chars" : 2372
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 8,
		"words" : 145,
		"chars" : 712
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 9,
		"words" : 224,
		"chars" : 1153
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 10,
		"words" : 430,
		"chars" : 2329
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 11,
		"words" : 378,
		"chars" : 1913
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 12,
		"words" : 89,
		"chars" : 456
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 13,
		"words" : 167,
		"chars" : 805
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 14,
		"words" : 21,
		"chars" : 98
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 15,
		"words" : 152,
		"chars" : 796
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 16,
		"words" : 61,
		"chars" : 274
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 17,
		"words" : 46,
		"chars" : 206
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 18,
		"words" : 29,
		"chars" : 122
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 19,
		"words" : 220,
		"chars" : 989
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 20,
		"words" : 52,
		"chars" : 234
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 21,
		"words" : 106,
		"chars" : 464
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 22,
		"words" : 121,
		"chars" : 526
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 23,
		"words" : 177,
		"chars" : 827
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 24,
		"words" : 69,
		"chars" : 366
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 25,
		"words" : 182,
		"chars" : 888
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 26,
		"words" : 5,
		"chars" : 27
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 27,
		"words" : 210,
		"chars" : 1011
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 28,
		"words" : 34,
		"chars" : 162
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 29,
		"words" : 554,
		"chars" : 2737
	},
	{
		"season" : 4,
		"episode" : 13,
		"scene" : 31,
		"words" : 213,
		"chars" : 967
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 1,
		"words" : 71,
		"chars" : 331
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 2,
		"words" : 101,
		"chars" : 551
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 3,
		"words" : 254,
		"chars" : 1258
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 4,
		"words" : 90,
		"chars" : 459
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 5,
		"words" : 125,
		"chars" : 631
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 6,
		"words" : 9,
		"chars" : 50
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 7,
		"words" : 13,
		"chars" : 70
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 8,
		"words" : 129,
		"chars" : 612
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 9,
		"words" : 159,
		"chars" : 776
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 10,
		"words" : 187,
		"chars" : 925
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 11,
		"words" : 12,
		"chars" : 71
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 12,
		"words" : 283,
		"chars" : 1406
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 15,
		"words" : 10,
		"chars" : 51
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 16,
		"words" : 85,
		"chars" : 415
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 17,
		"words" : 18,
		"chars" : 86
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 18,
		"words" : 50,
		"chars" : 261
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 19,
		"words" : 116,
		"chars" : 568
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 20,
		"words" : 104,
		"chars" : 564
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 21,
		"words" : 39,
		"chars" : 204
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 22,
		"words" : 203,
		"chars" : 937
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 23,
		"words" : 287,
		"chars" : 1417
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 24,
		"words" : 362,
		"chars" : 1738
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 25,
		"words" : 422,
		"chars" : 2034
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 26,
		"words" : 226,
		"chars" : 1109
	},
	{
		"season" : 5,
		"episode" : 1,
		"scene" : 27,
		"words" : 61,
		"chars" : 287
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 1,
		"words" : 327,
		"chars" : 1577
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 2,
		"words" : 184,
		"chars" : 848
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 3,
		"words" : 379,
		"chars" : 1816
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 4,
		"words" : 194,
		"chars" : 904
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 5,
		"words" : 109,
		"chars" : 539
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 6,
		"words" : 60,
		"chars" : 301
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 7,
		"words" : 172,
		"chars" : 821
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 8,
		"words" : 166,
		"chars" : 781
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 9,
		"words" : 61,
		"chars" : 256
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 10,
		"words" : 133,
		"chars" : 647
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 11,
		"words" : 373,
		"chars" : 1767
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 12,
		"words" : 49,
		"chars" : 207
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 13,
		"words" : 160,
		"chars" : 789
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 14,
		"words" : 1,
		"chars" : 9
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 15,
		"words" : 335,
		"chars" : 1547
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 16,
		"words" : 172,
		"chars" : 819
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 17,
		"words" : 14,
		"chars" : 72
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 18,
		"words" : 377,
		"chars" : 1843
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 19,
		"words" : 100,
		"chars" : 476
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 20,
		"words" : 90,
		"chars" : 473
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 21,
		"words" : 320,
		"chars" : 1501
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 22,
		"words" : 123,
		"chars" : 589
	},
	{
		"season" : 5,
		"episode" : 2,
		"scene" : 23,
		"words" : 68,
		"chars" : 342
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 1,
		"words" : 28,
		"chars" : 166
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 2,
		"words" : 222,
		"chars" : 1014
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 3,
		"words" : 198,
		"chars" : 987
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 4,
		"words" : 169,
		"chars" : 865
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 5,
		"words" : 177,
		"chars" : 837
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 6,
		"words" : 82,
		"chars" : 370
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 7,
		"words" : 194,
		"chars" : 964
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 8,
		"words" : 82,
		"chars" : 412
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 9,
		"words" : 125,
		"chars" : 623
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 10,
		"words" : 161,
		"chars" : 818
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 11,
		"words" : 345,
		"chars" : 1666
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 12,
		"words" : 199,
		"chars" : 1033
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 13,
		"words" : 243,
		"chars" : 1206
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 14,
		"words" : 274,
		"chars" : 1359
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 15,
		"words" : 170,
		"chars" : 840
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 16,
		"words" : 126,
		"chars" : 619
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 17,
		"words" : 348,
		"chars" : 1693
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 18,
		"words" : 238,
		"chars" : 1214
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 19,
		"words" : 82,
		"chars" : 428
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 20,
		"words" : 180,
		"chars" : 853
	},
	{
		"season" : 5,
		"episode" : 3,
		"scene" : 21,
		"words" : 253,
		"chars" : 1257
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 1,
		"words" : 209,
		"chars" : 995
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 2,
		"words" : 135,
		"chars" : 623
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 3,
		"words" : 163,
		"chars" : 827
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 4,
		"words" : 248,
		"chars" : 1215
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 5,
		"words" : 273,
		"chars" : 1263
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 6,
		"words" : 261,
		"chars" : 1283
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 7,
		"words" : 87,
		"chars" : 411
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 8,
		"words" : 204,
		"chars" : 943
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 9,
		"words" : 93,
		"chars" : 426
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 10,
		"words" : 186,
		"chars" : 849
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 11,
		"words" : 101,
		"chars" : 511
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 12,
		"words" : 422,
		"chars" : 1995
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 13,
		"words" : 116,
		"chars" : 585
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 14,
		"words" : 96,
		"chars" : 473
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 15,
		"words" : 85,
		"chars" : 388
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 16,
		"words" : 113,
		"chars" : 562
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 17,
		"words" : 127,
		"chars" : 639
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 18,
		"words" : 103,
		"chars" : 505
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 19,
		"words" : 118,
		"chars" : 584
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 20,
		"words" : 147,
		"chars" : 746
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 21,
		"words" : 179,
		"chars" : 837
	},
	{
		"season" : 5,
		"episode" : 4,
		"scene" : 22,
		"words" : 161,
		"chars" : 758
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 1,
		"words" : 132,
		"chars" : 595
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 2,
		"words" : 204,
		"chars" : 1020
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 3,
		"words" : 118,
		"chars" : 580
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 4,
		"words" : 250,
		"chars" : 1298
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 5,
		"words" : 146,
		"chars" : 685
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 6,
		"words" : 190,
		"chars" : 909
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 7,
		"words" : 187,
		"chars" : 898
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 8,
		"words" : 153,
		"chars" : 700
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 9,
		"words" : 222,
		"chars" : 1076
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 10,
		"words" : 36,
		"chars" : 169
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 11,
		"words" : 165,
		"chars" : 861
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 12,
		"words" : 214,
		"chars" : 1012
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 13,
		"words" : 98,
		"chars" : 496
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 14,
		"words" : 283,
		"chars" : 1278
	},
	{
		"season" : 5,
		"episode" : 5,
		"scene" : 15,
		"words" : 196,
		"chars" : 873
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 1,
		"words" : 67,
		"chars" : 297
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 2,
		"words" : 52,
		"chars" : 242
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 3,
		"words" : 635,
		"chars" : 3182
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 4,
		"words" : 215,
		"chars" : 1073
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 5,
		"words" : 183,
		"chars" : 897
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 6,
		"words" : 10,
		"chars" : 43
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 7,
		"words" : 70,
		"chars" : 351
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 8,
		"words" : 219,
		"chars" : 1085
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 9,
		"words" : 71,
		"chars" : 342
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 10,
		"words" : 229,
		"chars" : 1087
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 11,
		"words" : 106,
		"chars" : 481
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 12,
		"words" : 230,
		"chars" : 1252
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 13,
		"words" : 345,
		"chars" : 1712
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 15,
		"words" : 248,
		"chars" : 1258
	},
	{
		"season" : 5,
		"episode" : 6,
		"scene" : 16,
		"words" : 275,
		"chars" : 1362
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 1,
		"words" : 51,
		"chars" : 259
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 2,
		"words" : 51,
		"chars" : 241
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 3,
		"words" : 14,
		"chars" : 67
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 4,
		"words" : 150,
		"chars" : 738
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 5,
		"words" : 11,
		"chars" : 51
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 6,
		"words" : 12,
		"chars" : 52
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 7,
		"words" : 40,
		"chars" : 167
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 8,
		"words" : 89,
		"chars" : 404
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 9,
		"words" : 338,
		"chars" : 1630
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 10,
		"words" : 265,
		"chars" : 1332
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 11,
		"words" : 74,
		"chars" : 364
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 12,
		"words" : 16,
		"chars" : 101
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 13,
		"words" : 200,
		"chars" : 983
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 14,
		"words" : 257,
		"chars" : 1251
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 15,
		"words" : 260,
		"chars" : 1225
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 16,
		"words" : 113,
		"chars" : 557
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 17,
		"words" : 119,
		"chars" : 596
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 18,
		"words" : 94,
		"chars" : 436
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 19,
		"words" : 139,
		"chars" : 676
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 20,
		"words" : 6,
		"chars" : 24
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 21,
		"words" : 357,
		"chars" : 1729
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 22,
		"words" : 512,
		"chars" : 2374
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 23,
		"words" : 8,
		"chars" : 36
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 24,
		"words" : 252,
		"chars" : 1258
	},
	{
		"season" : 5,
		"episode" : 7,
		"scene" : 25,
		"words" : 10,
		"chars" : 45
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 1,
		"words" : 57,
		"chars" : 253
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 2,
		"words" : 12,
		"chars" : 51
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 3,
		"words" : 63,
		"chars" : 303
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 4,
		"words" : 233,
		"chars" : 1141
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 5,
		"words" : 43,
		"chars" : 218
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 6,
		"words" : 56,
		"chars" : 282
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 7,
		"words" : 47,
		"chars" : 213
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 8,
		"words" : 92,
		"chars" : 435
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 9,
		"words" : 303,
		"chars" : 1453
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 10,
		"words" : 252,
		"chars" : 1160
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 11,
		"words" : 174,
		"chars" : 865
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 13,
		"words" : 164,
		"chars" : 794
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 14,
		"words" : 102,
		"chars" : 506
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 15,
		"words" : 93,
		"chars" : 453
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 16,
		"words" : 98,
		"chars" : 489
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 17,
		"words" : 74,
		"chars" : 356
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 18,
		"words" : 341,
		"chars" : 1679
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 19,
		"words" : 223,
		"chars" : 1073
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 20,
		"words" : 466,
		"chars" : 2252
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 21,
		"words" : 168,
		"chars" : 778
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 22,
		"words" : 183,
		"chars" : 887
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 24,
		"words" : 33,
		"chars" : 152
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 25,
		"words" : 234,
		"chars" : 1068
	},
	{
		"season" : 5,
		"episode" : 8,
		"scene" : 26,
		"words" : 41,
		"chars" : 187
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 1,
		"words" : 214,
		"chars" : 1119
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 2,
		"words" : 63,
		"chars" : 297
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 3,
		"words" : 122,
		"chars" : 577
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 4,
		"words" : 209,
		"chars" : 1043
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 5,
		"words" : 42,
		"chars" : 212
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 6,
		"words" : 118,
		"chars" : 580
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 7,
		"words" : 197,
		"chars" : 958
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 8,
		"words" : 213,
		"chars" : 1065
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 9,
		"words" : 17,
		"chars" : 84
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 10,
		"words" : 116,
		"chars" : 542
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 11,
		"words" : 203,
		"chars" : 954
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 12,
		"words" : 93,
		"chars" : 450
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 13,
		"words" : 85,
		"chars" : 443
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 14,
		"words" : 264,
		"chars" : 1326
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 15,
		"words" : 285,
		"chars" : 1367
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 16,
		"words" : 248,
		"chars" : 1244
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 17,
		"words" : 275,
		"chars" : 1340
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 18,
		"words" : 108,
		"chars" : 523
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 19,
		"words" : 44,
		"chars" : 212
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 20,
		"words" : 107,
		"chars" : 548
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 21,
		"words" : 36,
		"chars" : 165
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 22,
		"words" : 346,
		"chars" : 1626
	},
	{
		"season" : 5,
		"episode" : 9,
		"scene" : 23,
		"words" : 69,
		"chars" : 318
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 1,
		"words" : 9,
		"chars" : 0
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 2,
		"words" : 125,
		"chars" : 640
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 3,
		"words" : 41,
		"chars" : 225
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 4,
		"words" : 117,
		"chars" : 626
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 5,
		"words" : 122,
		"chars" : 616
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 6,
		"words" : 151,
		"chars" : 754
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 7,
		"words" : 221,
		"chars" : 1094
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 8,
		"words" : 145,
		"chars" : 788
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 9,
		"words" : 156,
		"chars" : 772
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 10,
		"words" : 196,
		"chars" : 995
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 11,
		"words" : 13,
		"chars" : 67
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 12,
		"words" : 83,
		"chars" : 433
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 13,
		"words" : 65,
		"chars" : 328
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 14,
		"words" : 205,
		"chars" : 1030
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 15,
		"words" : 258,
		"chars" : 1352
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 16,
		"words" : 70,
		"chars" : 383
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 17,
		"words" : 278,
		"chars" : 1436
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 18,
		"words" : 104,
		"chars" : 516
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 19,
		"words" : 151,
		"chars" : 730
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 20,
		"words" : 169,
		"chars" : 844
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 21,
		"words" : 60,
		"chars" : 312
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 22,
		"words" : 95,
		"chars" : 508
	},
	{
		"season" : 5,
		"episode" : 10,
		"scene" : 24,
		"words" : 96,
		"chars" : 478
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 1,
		"words" : 63,
		"chars" : 301
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 2,
		"words" : 317,
		"chars" : 1580
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 3,
		"words" : 104,
		"chars" : 457
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 4,
		"words" : 326,
		"chars" : 1484
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 5,
		"words" : 205,
		"chars" : 1006
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 6,
		"words" : 137,
		"chars" : 611
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 7,
		"words" : 89,
		"chars" : 437
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 8,
		"words" : 277,
		"chars" : 1343
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 9,
		"words" : 213,
		"chars" : 1057
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 10,
		"words" : 31,
		"chars" : 143
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 11,
		"words" : 291,
		"chars" : 1429
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 12,
		"words" : 232,
		"chars" : 1187
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 13,
		"words" : 175,
		"chars" : 840
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 14,
		"words" : 107,
		"chars" : 501
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 15,
		"words" : 78,
		"chars" : 383
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 16,
		"words" : 7,
		"chars" : 36
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 17,
		"words" : 158,
		"chars" : 733
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 18,
		"words" : 46,
		"chars" : 206
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 19,
		"words" : 17,
		"chars" : 80
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 20,
		"words" : 172,
		"chars" : 787
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 21,
		"words" : 114,
		"chars" : 534
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 22,
		"words" : 189,
		"chars" : 900
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 23,
		"words" : 227,
		"chars" : 1101
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 24,
		"words" : 286,
		"chars" : 1394
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 25,
		"words" : 2,
		"chars" : 14
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 26,
		"words" : 171,
		"chars" : 797
	},
	{
		"season" : 5,
		"episode" : 11,
		"scene" : 27,
		"words" : 11,
		"chars" : 52
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 1,
		"words" : 70,
		"chars" : 331
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 2,
		"words" : 106,
		"chars" : 496
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 3,
		"words" : 118,
		"chars" : 532
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 4,
		"words" : 165,
		"chars" : 766
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 5,
		"words" : 132,
		"chars" : 611
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 6,
		"words" : 304,
		"chars" : 1481
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 7,
		"words" : 187,
		"chars" : 911
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 8,
		"words" : 216,
		"chars" : 1082
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 9,
		"words" : 97,
		"chars" : 483
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 10,
		"words" : 93,
		"chars" : 481
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 11,
		"words" : 129,
		"chars" : 597
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 12,
		"words" : 219,
		"chars" : 1041
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 13,
		"words" : 46,
		"chars" : 233
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 14,
		"words" : 153,
		"chars" : 810
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 15,
		"words" : 242,
		"chars" : 1137
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 16,
		"words" : 34,
		"chars" : 163
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 17,
		"words" : 97,
		"chars" : 517
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 18,
		"words" : 237,
		"chars" : 1157
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 19,
		"words" : 109,
		"chars" : 571
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 20,
		"words" : 41,
		"chars" : 203
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 21,
		"words" : 48,
		"chars" : 227
	},
	{
		"season" : 5,
		"episode" : 12,
		"scene" : 22,
		"words" : 327,
		"chars" : 1482
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 1,
		"words" : 185,
		"chars" : 887
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 2,
		"words" : 194,
		"chars" : 906
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 3,
		"words" : 124,
		"chars" : 602
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 4,
		"words" : 113,
		"chars" : 550
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 5,
		"words" : 159,
		"chars" : 725
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 6,
		"words" : 127,
		"chars" : 598
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 7,
		"words" : 106,
		"chars" : 501
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 8,
		"words" : 172,
		"chars" : 766
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 9,
		"words" : 276,
		"chars" : 1372
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 10,
		"words" : 212,
		"chars" : 1048
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 11,
		"words" : 132,
		"chars" : 622
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 12,
		"words" : 340,
		"chars" : 1714
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 13,
		"words" : 205,
		"chars" : 1082
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 14,
		"words" : 170,
		"chars" : 796
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 15,
		"words" : 227,
		"chars" : 1089
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 16,
		"words" : 141,
		"chars" : 675
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 17,
		"words" : 78,
		"chars" : 379
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 18,
		"words" : 245,
		"chars" : 1176
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 19,
		"words" : 428,
		"chars" : 2121
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 20,
		"words" : 202,
		"chars" : 991
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 21,
		"words" : 119,
		"chars" : 533
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 22,
		"words" : 186,
		"chars" : 877
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 23,
		"words" : 61,
		"chars" : 270
	},
	{
		"season" : 5,
		"episode" : 13,
		"scene" : 24,
		"words" : 19,
		"chars" : 83
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 1,
		"words" : 75,
		"chars" : 388
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 2,
		"words" : 53,
		"chars" : 257
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 3,
		"words" : 18,
		"chars" : 77
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 4,
		"words" : 100,
		"chars" : 481
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 5,
		"words" : 144,
		"chars" : 665
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 6,
		"words" : 105,
		"chars" : 545
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 7,
		"words" : 68,
		"chars" : 305
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 8,
		"words" : 104,
		"chars" : 512
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 9,
		"words" : 14,
		"chars" : 74
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 10,
		"words" : 245,
		"chars" : 1206
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 11,
		"words" : 187,
		"chars" : 892
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 12,
		"words" : 98,
		"chars" : 472
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 13,
		"words" : 218,
		"chars" : 1077
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 14,
		"words" : 308,
		"chars" : 1481
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 15,
		"words" : 415,
		"chars" : 2195
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 16,
		"words" : 309,
		"chars" : 1511
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 17,
		"words" : 166,
		"chars" : 781
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 18,
		"words" : 215,
		"chars" : 987
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 19,
		"words" : 163,
		"chars" : 817
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 20,
		"words" : 136,
		"chars" : 627
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 21,
		"words" : 119,
		"chars" : 561
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 22,
		"words" : 351,
		"chars" : 1842
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 23,
		"words" : 115,
		"chars" : 574
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 24,
		"words" : 21,
		"chars" : 98
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 25,
		"words" : 69,
		"chars" : 352
	},
	{
		"season" : 5,
		"episode" : 14,
		"scene" : 26,
		"words" : 232,
		"chars" : 1068
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 1,
		"words" : 222,
		"chars" : 1064
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 2,
		"words" : 198,
		"chars" : 983
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 3,
		"words" : 137,
		"chars" : 664
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 4,
		"words" : 428,
		"chars" : 2099
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 5,
		"words" : 95,
		"chars" : 447
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 6,
		"words" : 213,
		"chars" : 1005
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 7,
		"words" : 227,
		"chars" : 1115
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 8,
		"words" : 90,
		"chars" : 451
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 9,
		"words" : 279,
		"chars" : 1354
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 10,
		"words" : 179,
		"chars" : 926
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 11,
		"words" : 164,
		"chars" : 818
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 12,
		"words" : 149,
		"chars" : 695
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 13,
		"words" : 239,
		"chars" : 1178
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 14,
		"words" : 169,
		"chars" : 811
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 15,
		"words" : 127,
		"chars" : 605
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 16,
		"words" : 239,
		"chars" : 1131
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 17,
		"words" : 230,
		"chars" : 1141
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 18,
		"words" : 61,
		"chars" : 317
	},
	{
		"season" : 5,
		"episode" : 15,
		"scene" : 19,
		"words" : 122,
		"chars" : 637
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 2,
		"words" : 286,
		"chars" : 1412
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 3,
		"words" : 176,
		"chars" : 891
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 4,
		"words" : 178,
		"chars" : 972
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 5,
		"words" : 157,
		"chars" : 851
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 6,
		"words" : 261,
		"chars" : 1344
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 7,
		"words" : 100,
		"chars" : 508
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 8,
		"words" : 123,
		"chars" : 615
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 9,
		"words" : 220,
		"chars" : 1157
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 10,
		"words" : 95,
		"chars" : 465
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 11,
		"words" : 191,
		"chars" : 993
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 12,
		"words" : 166,
		"chars" : 855
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 13,
		"words" : 129,
		"chars" : 631
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 14,
		"words" : 112,
		"chars" : 493
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 15,
		"words" : 119,
		"chars" : 609
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 16,
		"words" : 188,
		"chars" : 927
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 17,
		"words" : 115,
		"chars" : 553
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 18,
		"words" : 68,
		"chars" : 347
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 19,
		"words" : 72,
		"chars" : 366
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 20,
		"words" : 260,
		"chars" : 1323
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 21,
		"words" : 38,
		"chars" : 159
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 22,
		"words" : 30,
		"chars" : 125
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 23,
		"words" : 84,
		"chars" : 431
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 24,
		"words" : 29,
		"chars" : 141
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 25,
		"words" : 67,
		"chars" : 308
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 26,
		"words" : 112,
		"chars" : 546
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 27,
		"words" : 111,
		"chars" : 574
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 28,
		"words" : 511,
		"chars" : 2485
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 29,
		"words" : 242,
		"chars" : 1123
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 30,
		"words" : 147,
		"chars" : 704
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 31,
		"words" : 280,
		"chars" : 1350
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 32,
		"words" : 281,
		"chars" : 1323
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 33,
		"words" : 124,
		"chars" : 621
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 34,
		"words" : 258,
		"chars" : 1265
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 35,
		"words" : 385,
		"chars" : 1781
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 36,
		"words" : 238,
		"chars" : 1151
	},
	{
		"season" : 5,
		"episode" : 16,
		"scene" : 37,
		"words" : 82,
		"chars" : 325
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 1,
		"words" : 485,
		"chars" : 2324
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 2,
		"words" : 236,
		"chars" : 1142
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 3,
		"words" : 194,
		"chars" : 946
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 4,
		"words" : 298,
		"chars" : 1461
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 5,
		"words" : 63,
		"chars" : 288
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 6,
		"words" : 260,
		"chars" : 1299
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 7,
		"words" : 319,
		"chars" : 1570
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 8,
		"words" : 204,
		"chars" : 1074
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 9,
		"words" : 208,
		"chars" : 1035
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 10,
		"words" : 226,
		"chars" : 1155
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 11,
		"words" : 120,
		"chars" : 646
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 12,
		"words" : 67,
		"chars" : 315
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 13,
		"words" : 135,
		"chars" : 689
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 14,
		"words" : 82,
		"chars" : 408
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 15,
		"words" : 42,
		"chars" : 215
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 16,
		"words" : 165,
		"chars" : 847
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 17,
		"words" : 148,
		"chars" : 741
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 18,
		"words" : 314,
		"chars" : 1628
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 19,
		"words" : 205,
		"chars" : 1042
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 20,
		"words" : 61,
		"chars" : 295
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 21,
		"words" : 114,
		"chars" : 578
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 22,
		"words" : 75,
		"chars" : 381
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 23,
		"words" : 291,
		"chars" : 1520
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 24,
		"words" : 327,
		"chars" : 1644
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 25,
		"words" : 43,
		"chars" : 209
	},
	{
		"season" : 6,
		"episode" : 1,
		"scene" : 26,
		"words" : 78,
		"chars" : 400
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 1,
		"words" : 2,
		"chars" : 11
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 2,
		"words" : 118,
		"chars" : 621
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 3,
		"words" : 185,
		"chars" : 872
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 4,
		"words" : 216,
		"chars" : 1125
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 5,
		"words" : 135,
		"chars" : 661
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 6,
		"words" : 74,
		"chars" : 364
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 7,
		"words" : 32,
		"chars" : 175
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 8,
		"words" : 37,
		"chars" : 179
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 9,
		"words" : 83,
		"chars" : 399
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 10,
		"words" : 113,
		"chars" : 566
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 11,
		"words" : 225,
		"chars" : 1153
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 12,
		"words" : 24,
		"chars" : 136
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 13,
		"words" : 226,
		"chars" : 1164
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 14,
		"words" : 190,
		"chars" : 947
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 15,
		"words" : 111,
		"chars" : 544
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 16,
		"words" : 164,
		"chars" : 809
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 17,
		"words" : 27,
		"chars" : 135
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 18,
		"words" : 40,
		"chars" : 210
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 19,
		"words" : 272,
		"chars" : 1428
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 20,
		"words" : 181,
		"chars" : 890
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 21,
		"words" : 175,
		"chars" : 878
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 22,
		"words" : 187,
		"chars" : 922
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 24,
		"words" : 65,
		"chars" : 348
	},
	{
		"season" : 6,
		"episode" : 2,
		"scene" : 25,
		"words" : 65,
		"chars" : 322
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 1,
		"words" : 18,
		"chars" : 93
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 2,
		"words" : 169,
		"chars" : 832
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 3,
		"words" : 5,
		"chars" : 31
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 4,
		"words" : 176,
		"chars" : 963
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 5,
		"words" : 176,
		"chars" : 894
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 6,
		"words" : 80,
		"chars" : 430
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 7,
		"words" : 9,
		"chars" : 42
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 8,
		"words" : 181,
		"chars" : 926
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 9,
		"words" : 188,
		"chars" : 947
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 10,
		"words" : 94,
		"chars" : 477
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 11,
		"words" : 76,
		"chars" : 368
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 12,
		"words" : 190,
		"chars" : 949
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 13,
		"words" : 280,
		"chars" : 1439
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 14,
		"words" : 225,
		"chars" : 1161
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 15,
		"words" : 48,
		"chars" : 243
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 16,
		"words" : 53,
		"chars" : 259
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 17,
		"words" : 252,
		"chars" : 1268
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 18,
		"words" : 117,
		"chars" : 569
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 19,
		"words" : 34,
		"chars" : 159
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 20,
		"words" : 20,
		"chars" : 130
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 21,
		"words" : 22,
		"chars" : 111
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 22,
		"words" : 73,
		"chars" : 375
	},
	{
		"season" : 6,
		"episode" : 3,
		"scene" : 23,
		"words" : 338,
		"chars" : 1752
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 1,
		"words" : 142,
		"chars" : 721
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 2,
		"words" : 25,
		"chars" : 129
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 3,
		"words" : 47,
		"chars" : 252
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 4,
		"words" : 82,
		"chars" : 398
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 5,
		"words" : 133,
		"chars" : 673
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 6,
		"words" : 77,
		"chars" : 399
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 7,
		"words" : 42,
		"chars" : 196
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 8,
		"words" : 174,
		"chars" : 910
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 9,
		"words" : 134,
		"chars" : 662
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 10,
		"words" : 128,
		"chars" : 627
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 11,
		"words" : 163,
		"chars" : 853
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 12,
		"words" : 165,
		"chars" : 825
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 13,
		"words" : 220,
		"chars" : 1098
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 14,
		"words" : 82,
		"chars" : 425
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 15,
		"words" : 86,
		"chars" : 429
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 16,
		"words" : 7,
		"chars" : 38
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 17,
		"words" : 122,
		"chars" : 702
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 18,
		"words" : 147,
		"chars" : 731
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 19,
		"words" : 219,
		"chars" : 1074
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 20,
		"words" : 34,
		"chars" : 169
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 21,
		"words" : 56,
		"chars" : 275
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 22,
		"words" : 215,
		"chars" : 1081
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 23,
		"words" : 189,
		"chars" : 910
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 24,
		"words" : 273,
		"chars" : 1420
	},
	{
		"season" : 6,
		"episode" : 4,
		"scene" : 25,
		"words" : 120,
		"chars" : 611
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 1,
		"words" : 177,
		"chars" : 962
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 2,
		"words" : 117,
		"chars" : 557
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 3,
		"words" : 70,
		"chars" : 313
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 4,
		"words" : 187,
		"chars" : 955
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 5,
		"words" : 202,
		"chars" : 1080
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 6,
		"words" : 153,
		"chars" : 776
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 7,
		"words" : 36,
		"chars" : 167
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 8,
		"words" : 88,
		"chars" : 463
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 9,
		"words" : 16,
		"chars" : 85
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 10,
		"words" : 100,
		"chars" : 541
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 11,
		"words" : 9,
		"chars" : 41
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 12,
		"words" : 215,
		"chars" : 1061
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 13,
		"words" : 130,
		"chars" : 669
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 14,
		"words" : 94,
		"chars" : 455
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 15,
		"words" : 42,
		"chars" : 192
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 16,
		"words" : 146,
		"chars" : 729
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 17,
		"words" : 131,
		"chars" : 664
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 18,
		"words" : 28,
		"chars" : 127
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 19,
		"words" : 276,
		"chars" : 1468
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 20,
		"words" : 229,
		"chars" : 1083
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 21,
		"words" : 95,
		"chars" : 477
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 22,
		"words" : 20,
		"chars" : 98
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 23,
		"words" : 16,
		"chars" : 72
	},
	{
		"season" : 6,
		"episode" : 5,
		"scene" : 24,
		"words" : 47,
		"chars" : 234
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 1,
		"words" : 112,
		"chars" : 588
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 2,
		"words" : 182,
		"chars" : 1068
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 3,
		"words" : 193,
		"chars" : 1087
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 4,
		"words" : 126,
		"chars" : 668
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 5,
		"words" : 60,
		"chars" : 318
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 6,
		"words" : 266,
		"chars" : 1398
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 7,
		"words" : 112,
		"chars" : 557
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 8,
		"words" : 51,
		"chars" : 270
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 9,
		"words" : 78,
		"chars" : 379
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 10,
		"words" : 144,
		"chars" : 759
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 11,
		"words" : 312,
		"chars" : 1620
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 12,
		"words" : 195,
		"chars" : 981
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 13,
		"words" : 178,
		"chars" : 920
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 14,
		"words" : 278,
		"chars" : 1477
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 16,
		"words" : 285,
		"chars" : 1389
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 17,
		"words" : 234,
		"chars" : 1155
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 18,
		"words" : 196,
		"chars" : 977
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 19,
		"words" : 252,
		"chars" : 1372
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 20,
		"words" : 165,
		"chars" : 819
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 21,
		"words" : 161,
		"chars" : 828
	},
	{
		"season" : 6,
		"episode" : 6,
		"scene" : 22,
		"words" : 29,
		"chars" : 143
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 1,
		"words" : 108,
		"chars" : 534
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 2,
		"words" : 292,
		"chars" : 1530
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 3,
		"words" : 182,
		"chars" : 909
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 4,
		"words" : 222,
		"chars" : 1163
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 5,
		"words" : 311,
		"chars" : 1591
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 6,
		"words" : 44,
		"chars" : 230
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 7,
		"words" : 143,
		"chars" : 731
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 8,
		"words" : 91,
		"chars" : 461
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 10,
		"words" : 88,
		"chars" : 459
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 11,
		"words" : 18,
		"chars" : 85
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 12,
		"words" : 161,
		"chars" : 846
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 13,
		"words" : 138,
		"chars" : 715
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 14,
		"words" : 145,
		"chars" : 790
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 15,
		"words" : 164,
		"chars" : 829
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 16,
		"words" : 150,
		"chars" : 770
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 17,
		"words" : 6,
		"chars" : 29
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 18,
		"words" : 124,
		"chars" : 657
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 19,
		"words" : 64,
		"chars" : 317
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 20,
		"words" : 234,
		"chars" : 1157
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 21,
		"words" : 49,
		"chars" : 238
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 22,
		"words" : 196,
		"chars" : 1043
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 23,
		"words" : 117,
		"chars" : 566
	},
	{
		"season" : 6,
		"episode" : 7,
		"scene" : 24,
		"words" : 125,
		"chars" : 634
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 1,
		"words" : 59,
		"chars" : 311
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 2,
		"words" : 211,
		"chars" : 1059
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 3,
		"words" : 260,
		"chars" : 1329
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 4,
		"words" : 59,
		"chars" : 330
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 5,
		"words" : 152,
		"chars" : 838
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 6,
		"words" : 195,
		"chars" : 1035
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 7,
		"words" : 111,
		"chars" : 603
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 8,
		"words" : 35,
		"chars" : 199
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 9,
		"words" : 147,
		"chars" : 778
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 10,
		"words" : 11,
		"chars" : 48
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 11,
		"words" : 155,
		"chars" : 842
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 12,
		"words" : 202,
		"chars" : 982
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 13,
		"words" : 227,
		"chars" : 1124
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 14,
		"words" : 176,
		"chars" : 831
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 15,
		"words" : 297,
		"chars" : 1482
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 16,
		"words" : 76,
		"chars" : 367
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 17,
		"words" : 301,
		"chars" : 1515
	},
	{
		"season" : 6,
		"episode" : 8,
		"scene" : 18,
		"words" : 104,
		"chars" : 511
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 1,
		"words" : 153,
		"chars" : 715
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 2,
		"words" : 78,
		"chars" : 390
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 3,
		"words" : 63,
		"chars" : 338
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 4,
		"words" : 153,
		"chars" : 784
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 5,
		"words" : 124,
		"chars" : 640
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 6,
		"words" : 113,
		"chars" : 592
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 7,
		"words" : 105,
		"chars" : 422
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 8,
		"words" : 127,
		"chars" : 646
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 10,
		"words" : 80,
		"chars" : 332
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 11,
		"words" : 40,
		"chars" : 188
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 12,
		"words" : 16,
		"chars" : 84
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 13,
		"words" : 157,
		"chars" : 842
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 14,
		"words" : 257,
		"chars" : 1289
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 15,
		"words" : 128,
		"chars" : 663
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 16,
		"words" : 124,
		"chars" : 610
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 17,
		"words" : 112,
		"chars" : 619
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 18,
		"words" : 99,
		"chars" : 488
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 19,
		"words" : 194,
		"chars" : 905
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 20,
		"words" : 85,
		"chars" : 413
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 21,
		"words" : 182,
		"chars" : 927
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 22,
		"words" : 251,
		"chars" : 1276
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 23,
		"words" : 26,
		"chars" : 127
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 24,
		"words" : 59,
		"chars" : 253
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 25,
		"words" : 176,
		"chars" : 865
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 26,
		"words" : 131,
		"chars" : 689
	},
	{
		"season" : 6,
		"episode" : 9,
		"scene" : 27,
		"words" : 44,
		"chars" : 204
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 1,
		"words" : 276,
		"chars" : 1414
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 2,
		"words" : 158,
		"chars" : 853
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 3,
		"words" : 243,
		"chars" : 1185
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 4,
		"words" : 339,
		"chars" : 1703
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 5,
		"words" : 31,
		"chars" : 168
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 6,
		"words" : 212,
		"chars" : 1096
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 7,
		"words" : 41,
		"chars" : 226
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 8,
		"words" : 435,
		"chars" : 2302
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 9,
		"words" : 103,
		"chars" : 513
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 10,
		"words" : 93,
		"chars" : 496
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 11,
		"words" : 141,
		"chars" : 728
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 12,
		"words" : 280,
		"chars" : 1413
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 13,
		"words" : 102,
		"chars" : 504
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 14,
		"words" : 447,
		"chars" : 2413
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 15,
		"words" : 37,
		"chars" : 186
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 16,
		"words" : 371,
		"chars" : 1891
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 17,
		"words" : 14,
		"chars" : 66
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 18,
		"words" : 96,
		"chars" : 474
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 19,
		"words" : 80,
		"chars" : 425
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 20,
		"words" : 102,
		"chars" : 510
	},
	{
		"season" : 6,
		"episode" : 10,
		"scene" : 21,
		"words" : 86,
		"chars" : 423
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 1,
		"words" : 144,
		"chars" : 856
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 2,
		"words" : 110,
		"chars" : 611
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 3,
		"words" : 143,
		"chars" : 716
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 4,
		"words" : 69,
		"chars" : 367
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 5,
		"words" : 187,
		"chars" : 1003
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 6,
		"words" : 187,
		"chars" : 983
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 7,
		"words" : 212,
		"chars" : 1114
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 8,
		"words" : 85,
		"chars" : 425
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 9,
		"words" : 241,
		"chars" : 1211
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 10,
		"words" : 175,
		"chars" : 889
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 11,
		"words" : 103,
		"chars" : 531
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 12,
		"words" : 109,
		"chars" : 563
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 13,
		"words" : 124,
		"chars" : 641
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 14,
		"words" : 259,
		"chars" : 1343
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 15,
		"words" : 78,
		"chars" : 385
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 16,
		"words" : 276,
		"chars" : 1378
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 17,
		"words" : 281,
		"chars" : 1399
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 18,
		"words" : 129,
		"chars" : 714
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 19,
		"words" : 220,
		"chars" : 1129
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 20,
		"words" : 109,
		"chars" : 551
	},
	{
		"season" : 6,
		"episode" : 11,
		"scene" : 21,
		"words" : 124,
		"chars" : 623
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 1,
		"words" : 295,
		"chars" : 1444
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 2,
		"words" : 152,
		"chars" : 806
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 3,
		"words" : 62,
		"chars" : 341
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 4,
		"words" : 157,
		"chars" : 770
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 5,
		"words" : 102,
		"chars" : 527
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 6,
		"words" : 305,
		"chars" : 1606
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 7,
		"words" : 124,
		"chars" : 617
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 8,
		"words" : 356,
		"chars" : 1943
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 9,
		"words" : 297,
		"chars" : 1560
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 10,
		"words" : 55,
		"chars" : 254
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 11,
		"words" : 97,
		"chars" : 471
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 12,
		"words" : 94,
		"chars" : 484
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 13,
		"words" : 119,
		"chars" : 615
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 14,
		"words" : 136,
		"chars" : 673
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 15,
		"words" : 48,
		"chars" : 223
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 16,
		"words" : 215,
		"chars" : 1080
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 17,
		"words" : 83,
		"chars" : 417
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 18,
		"words" : 137,
		"chars" : 691
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 19,
		"words" : 306,
		"chars" : 1556
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 20,
		"words" : 74,
		"chars" : 367
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 21,
		"words" : 56,
		"chars" : 296
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 22,
		"words" : 12,
		"chars" : 59
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 23,
		"words" : 158,
		"chars" : 799
	},
	{
		"season" : 6,
		"episode" : 12,
		"scene" : 24,
		"words" : 16,
		"chars" : 82
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 1,
		"words" : 214,
		"chars" : 1072
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 2,
		"words" : 11,
		"chars" : 60
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 3,
		"words" : 121,
		"chars" : 609
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 4,
		"words" : 246,
		"chars" : 1252
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 5,
		"words" : 244,
		"chars" : 1246
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 6,
		"words" : 148,
		"chars" : 780
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 7,
		"words" : 79,
		"chars" : 398
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 8,
		"words" : 127,
		"chars" : 628
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 9,
		"words" : 349,
		"chars" : 1789
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 10,
		"words" : 58,
		"chars" : 274
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 11,
		"words" : 228,
		"chars" : 1127
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 12,
		"words" : 285,
		"chars" : 1534
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 13,
		"words" : 603,
		"chars" : 3022
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 14,
		"words" : 303,
		"chars" : 1557
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 15,
		"words" : 27,
		"chars" : 137
	},
	{
		"season" : 6,
		"episode" : 13,
		"scene" : 16,
		"words" : 30,
		"chars" : 167
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 1,
		"words" : 9,
		"chars" : 55
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 2,
		"words" : 86,
		"chars" : 452
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 3,
		"words" : 53,
		"chars" : 269
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 4,
		"words" : 56,
		"chars" : 246
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 5,
		"words" : 54,
		"chars" : 277
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 6,
		"words" : 111,
		"chars" : 545
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 7,
		"words" : 10,
		"chars" : 50
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 8,
		"words" : 58,
		"chars" : 301
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 9,
		"words" : 232,
		"chars" : 1199
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 10,
		"words" : 172,
		"chars" : 879
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 11,
		"words" : 209,
		"chars" : 1079
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 12,
		"words" : 87,
		"chars" : 430
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 13,
		"words" : 15,
		"chars" : 73
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 14,
		"words" : 208,
		"chars" : 1100
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 15,
		"words" : 26,
		"chars" : 119
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 16,
		"words" : 221,
		"chars" : 1149
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 17,
		"words" : 3,
		"chars" : 19
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 18,
		"words" : 215,
		"chars" : 1110
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 20,
		"words" : 22,
		"chars" : 120
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 21,
		"words" : 31,
		"chars" : 153
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 22,
		"words" : 70,
		"chars" : 353
	},
	{
		"season" : 6,
		"episode" : 14,
		"scene" : 23,
		"words" : 42,
		"chars" : 234
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 1,
		"words" : 5,
		"chars" : 33
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 2,
		"words" : 137,
		"chars" : 761
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 3,
		"words" : 61,
		"chars" : 290
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 4,
		"words" : 28,
		"chars" : 144
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 5,
		"words" : 80,
		"chars" : 370
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 6,
		"words" : 240,
		"chars" : 1255
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 7,
		"words" : 205,
		"chars" : 1054
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 8,
		"words" : 156,
		"chars" : 764
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 9,
		"words" : 113,
		"chars" : 616
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 10,
		"words" : 22,
		"chars" : 132
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 11,
		"words" : 166,
		"chars" : 838
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 12,
		"words" : 218,
		"chars" : 1093
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 13,
		"words" : 156,
		"chars" : 810
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 14,
		"words" : 90,
		"chars" : 459
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 15,
		"words" : 264,
		"chars" : 1335
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 16,
		"words" : 141,
		"chars" : 701
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 17,
		"words" : 258,
		"chars" : 1263
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 18,
		"words" : 396,
		"chars" : 1931
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 19,
		"words" : 131,
		"chars" : 651
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 20,
		"words" : 76,
		"chars" : 380
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 21,
		"words" : 298,
		"chars" : 1511
	},
	{
		"season" : 6,
		"episode" : 15,
		"scene" : 22,
		"words" : 153,
		"chars" : 794
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 1,
		"words" : 159,
		"chars" : 809
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 2,
		"words" : 59,
		"chars" : 302
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 3,
		"words" : 220,
		"chars" : 1090
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 4,
		"words" : 154,
		"chars" : 811
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 5,
		"words" : 63,
		"chars" : 324
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 6,
		"words" : 202,
		"chars" : 1040
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 7,
		"words" : 211,
		"chars" : 1064
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 8,
		"words" : 133,
		"chars" : 705
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 9,
		"words" : 104,
		"chars" : 550
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 10,
		"words" : 157,
		"chars" : 788
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 11,
		"words" : 66,
		"chars" : 334
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 12,
		"words" : 156,
		"chars" : 800
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 13,
		"words" : 42,
		"chars" : 201
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 14,
		"words" : 84,
		"chars" : 407
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 15,
		"words" : 155,
		"chars" : 794
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 16,
		"words" : 130,
		"chars" : 685
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 17,
		"words" : 92,
		"chars" : 461
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 18,
		"words" : 7,
		"chars" : 30
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 19,
		"words" : 125,
		"chars" : 657
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 20,
		"words" : 174,
		"chars" : 870
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 21,
		"words" : 148,
		"chars" : 720
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 22,
		"words" : 145,
		"chars" : 764
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 23,
		"words" : 48,
		"chars" : 233
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 24,
		"words" : 95,
		"chars" : 511
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 25,
		"words" : 101,
		"chars" : 556
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 26,
		"words" : 20,
		"chars" : 108
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 27,
		"words" : 45,
		"chars" : 228
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 28,
		"words" : 37,
		"chars" : 184
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 29,
		"words" : 172,
		"chars" : 966
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 30,
		"words" : 6,
		"chars" : 26
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 31,
		"words" : 2,
		"chars" : 17
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 32,
		"words" : 157,
		"chars" : 809
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 33,
		"words" : 1,
		"chars" : 6
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 34,
		"words" : 18,
		"chars" : 83
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 35,
		"words" : 229,
		"chars" : 1159
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 36,
		"words" : 35,
		"chars" : 175
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 37,
		"words" : 101,
		"chars" : 490
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 38,
		"words" : 232,
		"chars" : 1248
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 39,
		"words" : 31,
		"chars" : 137
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 40,
		"words" : 63,
		"chars" : 324
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 41,
		"words" : 146,
		"chars" : 767
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 42,
		"words" : 106,
		"chars" : 535
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 43,
		"words" : 207,
		"chars" : 1027
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 44,
		"words" : 29,
		"chars" : 147
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 45,
		"words" : 118,
		"chars" : 577
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 46,
		"words" : 96,
		"chars" : 457
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 47,
		"words" : 103,
		"chars" : 514
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 48,
		"words" : 16,
		"chars" : 91
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 49,
		"words" : 105,
		"chars" : 523
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 50,
		"words" : 91,
		"chars" : 476
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 51,
		"words" : 100,
		"chars" : 505
	},
	{
		"season" : 6,
		"episode" : 16,
		"scene" : 53,
		"words" : 185,
		"chars" : 1004
	}
]
