import { Node, Link } from '../types';

export const yuanData: { nodes: Node[], links: Link[] } = {
  nodes: [
  {
    "id": "关汉卿",
    "group": 4,
    "val": 100,
    "color": "#34d399",
    "desc": "号已斋叟，元代杂剧奠基人，'元曲四大家'之首，被誉为'曲圣'。",
    "birth": 1234,
    "death": 1300,
    "locations": ["大都", "太原"],
    "works": [
      {
        "title": "南吕·一枝花·不伏老",
        "type": "散曲",
        "content": "我是个蒸不烂、煮不熟、搥不匾、炒不爆、响珰珰一粒铜豌豆。",
        "popularity": 980,
        "tags": [
          "个性",
          "自述"
        ]
      },
      {
        "title": "窦娥冤(节选)",
        "type": "杂剧",
        "content": "地也，你不分好歹何为地！天也，你错勘贤愚枉做天！",
        "popularity": 970,
        "tags": [
          "悲剧",
          "控诉"
        ]
      },
      {
        "title": "四块玉·闲适",
        "type": "散曲",
        "content": "适意行，安心坐，渴时饮几杯茶，饥时吃一顿饭。那汉子有甚么？",
        "popularity": 910,
        "tags": [
          "闲适",
          "生活"
        ]
      }
    ]
  },
  {
    "id": "马致远",
    "group": 4,
    "val": 95,
    "color": "#34d399",
    "desc": "字千里，号东篱，元代著名戏曲家、散曲家，'元曲四大家'之一。",
    "birth": 1250,
    "death": 1321,
    "locations": ["大都", "杭州"],
    "works": [
      {
        "title": "天净沙·秋思",
        "type": "散曲",
        "content": "枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。",
        "popularity": 1000,
        "tags": [
          "秋思",
          "羁旅",
          "名篇"
        ]
      },
      {
        "title": "夜行船·秋思",
        "type": "散曲",
        "content": "百岁光阴一梦蝶，重回首往事堪嗟。今日春来，明朝花谢。急罚盏夜阑灯灭。",
        "popularity": 920,
        "tags": [
          "叹世",
          "哲理"
        ]
      },
      {
        "title": "汉宫秋(节选)",
        "type": "杂剧",
        "content": "我则是叹英雄气概，想当日个汉祖开基，谁曾见这般成败。",
        "popularity": 900,
        "tags": [
          "历史",
          "悲剧"
        ]
      }
    ]
  },
  {
    "id": "郑光祖",
    "group": 4,
    "val": 88,
    "color": "#34d399",
    "desc": "字德辉，元代著名杂剧作家，'元曲四大家'之一。",
    "birth": 1264,
    "death": 1324,
    "works": [
      {
        "title": "倩女离魂(节选)",
        "type": "杂剧",
        "content": "恨不的，倩女离魂，随君直到天涯。",
        "popularity": 910,
        "tags": [
          "爱情",
          "名句"
        ]
      }
    ]
  },
  {
    "id": "白朴",
    "group": 4,
    "val": 87,
    "color": "#34d399",
    "desc": "字太素，号兰谷，元代著名戏曲作家，'元曲四大家'之一。",
    "birth": 1226,
    "death": 1306,
    "works": [
      {
        "title": "天净沙·秋",
        "type": "散曲",
        "content": "孤村落日残霞，轻烟老树寒鸦，一点飞鸿影下。青山绿水，白草红叶黄花。",
        "popularity": 950,
        "tags": [
          "写景",
          "秋天"
        ]
      },
      {
        "title": "梧桐雨(节选)",
        "type": "杂剧",
        "content": "这雨点儿，一点点滴在人心碎。",
        "popularity": 880,
        "tags": [
          "悲剧",
          "抒情"
        ]
      }
    ]
  },
  {
    "id": "王实甫",
    "group": 4,
    "val": 92,
    "color": "#34d399",
    "desc": "元代著名戏曲作家，代表作《西厢记》是中国古典戏剧巅峰之作。",
    "birth": 1260,
    "death": 1336,
    "works": [
      {
        "title": "西厢记(节选)",
        "type": "杂剧",
        "content": "碧云天，黄花地，西风紧，北雁南飞。晓来谁染霜林醉？总是离人泪。",
        "popularity": 990,
        "tags": [
          "爱情",
          "名句"
        ]
      },
      {
        "title": "十二月过尧民歌·别情",
        "type": "散曲",
        "content": "自别后遥山隐隐，更那堪远水粼粼。见杨柳飞绵滚滚，对桃花醉脸醺醺。",
        "popularity": 900,
        "tags": [
          "离别",
          "婉约"
        ]
      }
    ]
  },
  {
    "id": "张养浩",
    "group": 4,
    "val": 82,
    "color": "#34d399",
    "desc": "字希孟，号云庄，元代散曲作家，以《山坡羊·潼关怀古》闻名。",
    "birth": 1270,
    "death": 1329,
    "works": [
      {
        "title": "山坡羊·潼关怀古",
        "type": "散曲",
        "content": "峰峦如聚，波涛如怒，山河表里潼关路。望西都，意踌躇。伤心秦汉经行处，宫阙万间都做了土。兴，百姓苦；亡，百姓苦。",
        "popularity": 1000,
        "tags": [
          "怀古",
          "忧民",
          "名篇"
        ]
      },
      {
        "title": "山坡羊·骊山怀古",
        "type": "散曲",
        "content": "骊山四顾，阿房一炬，当时奢侈今何处？只见草萧疏，水萦纡。至今遗恨迷烟树。列国周齐秦汉楚，赢，都变做了土；输，都变做了土。",
        "popularity": 940,
        "tags": [
          "怀古",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "睢景臣",
    "group": 4,
    "val": 75,
    "color": "#34d399",
    "desc": "字景贤，元代散曲作家，以《哨遍·高祖还乡》著称。",
    "birth": 1275,
    "death": 1320,
    "works": [
      {
        "title": "哨遍·高祖还乡",
        "type": "散曲",
        "content": "社长排门取索，大户家里凶恶。差科重，赋税多，好教人没处躲。",
        "popularity": 940,
        "tags": [
          "讽刺",
          "现实"
        ]
      }
    ]
  },
  {
    "id": "乔吉",
    "group": 4,
    "val": 78,
    "color": "#34d399",
    "desc": "字梦符，号笙鹤翁，元代散曲作家，与张可久并称'双璧'。",
    "birth": 1280,
    "death": 1345,
    "works": [
      {
        "title": "天净沙·即事",
        "type": "散曲",
        "content": "莺莺燕燕春春，花花柳柳真真。事事风风韵韵。娇娇嫩嫩，停停当当人人。",
        "popularity": 910,
        "tags": [
          "叠字",
          "风情"
        ]
      },
      {
        "title": "折桂令·客窗清明",
        "type": "散曲",
        "content": "风风雨雨梨花，正展转那人家，又是清明也。",
        "popularity": 890,
        "tags": [
          "清明",
          "羁旅"
        ]
      }
    ]
  },
  {
    "id": "张可久",
    "group": 4,
    "val": 79,
    "color": "#34d399",
    "desc": "字小山，元代散曲作家，现存散曲数量最多的元曲作家。",
    "birth": 1270,
    "death": 1348,
    "works": [
      {
        "title": "人月圆·山中书事",
        "type": "散曲",
        "content": "兴亡千古繁华梦，诗眼倦天涯。孔林乔木，吴宫蔓草，楚庙寒鸦。",
        "popularity": 930,
        "tags": [
          "怀古",
          "闲适"
        ]
      },
      {
        "title": "卖花声·怀古",
        "type": "散曲",
        "content": "美人自刎乌江岸，战火曾烧赤壁山，将军空老玉门关。伤心秦汉，生民涂炭，读书人一声长叹。",
        "popularity": 920,
        "tags": [
          "怀古",
          "同情"
        ]
      }
    ]
  },
  {
    "id": "纪君祥",
    "group": 4,
    "val": 76,
    "color": "#34d399",
    "desc": "元代杂剧作家，代表作《赵氏孤儿》是中国著名悲剧。",
    "birth": 1260,
    "death": 1320,
    "works": [
      {
        "title": "赵氏孤儿(节选)",
        "type": "杂剧",
        "content": "舍生取义，千古流芳。",
        "popularity": 930,
        "tags": [
          "悲剧",
          "忠义"
        ]
      }
    ]
  },
  {
    "id": "康进之",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "元代杂剧作家，代表作《李逵负荆》。",
    "birth": 1250,
    "death": 1310,
    "works": [
      {
        "title": "李逵负荆(节选)",
        "type": "杂剧",
        "content": "俺这梁山泊，替天行道。",
        "popularity": 880,
        "tags": [
          "英雄",
          "豪迈"
        ]
      }
    ]
  },
  {
    "id": "高则诚",
    "group": 4,
    "val": 80,
    "color": "#34d399",
    "desc": "字晦仲，号菜根道人，元末明初戏曲作家，代表作《琵琶记》。",
    "birth": 1305,
    "death": 1370,
    "works": [
      {
        "title": "琵琶记(节选)",
        "type": "南戏",
        "content": "十年窗下无人问，一举成名天下知。",
        "popularity": 960,
        "tags": [
          "名句",
          "励志"
        ]
      }
    ]
  },
  {
    "id": "萨都剌",
    "group": 4,
    "val": 74,
    "color": "#34d399",
    "desc": "字天锡，号直斋，元代诗人、词人，回族，有《雁门集》传世。",
    "birth": 1272,
    "death": 1355,
    "works": [
      {
        "title": "满江红·金陵怀古",
        "type": "词",
        "content": "六代豪华，春去也、更无消息。",
        "popularity": 920,
        "tags": [
          "怀古",
          "豪放"
        ]
      }
    ]
  },
  {
    "id": "杨维桢",
    "group": 4,
    "val": 77,
    "color": "#34d399",
    "desc": "字廉夫，号铁崖，元末明初诗人、文学家，'铁崖体'创始人。",
    "birth": 1296,
    "death": 1370,
    "works": [
      {
        "title": "西湖竹枝词",
        "type": "七言绝句",
        "content": "苏家格调旧清词，写向湖边柳上枝。",
        "popularity": 890,
        "tags": [
          "民歌",
          "西湖"
        ]
      },
      {
        "title": "鸿门宴",
        "type": "古诗",
        "content": "项王击缶歌乌江，汉祖挥鞭入咸阳。",
        "popularity": 850,
        "tags": [
          "历史",
          "豪迈"
        ]
      }
    ]
  },
  {
    "id": "刘因",
    "group": 6,
    "val": 73,
    "color": "#fb923c",
    "desc": "字梦吉，号静修，元代理学家、诗人。",
    "birth": 1249,
    "death": 1293,
    "works": [
      {
        "title": "观梅有感",
        "type": "七言绝句",
        "content": "一枝疏影月黄昏，曾向诗人梦里魂。",
        "popularity": 850,
        "tags": [
          "咏物",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "许衡",
    "group": 6,
    "val": 75,
    "color": "#fb923c",
    "desc": "字平仲，号鲁斋，元代理学家、教育家。",
    "birth": 1209,
    "death": 1281,
    "works": [
      {
        "title": "自述",
        "type": "五言绝句",
        "content": "心如止水鉴常明，道在其中不远人。",
        "popularity": 830,
        "tags": [
          "理学",
          "修身"
        ]
      }
    ]
  },
  {
    "id": "刘祁",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字京叔，金末元初文学家。",
    "birth": 1203,
    "death": 1250,
    "works": [
      {
        "title": "归潜志",
        "type": "散文",
        "content": "金亡之祸，非一日之积。",
        "popularity": 810,
        "tags": [
          "历史",
          "感叹"
        ]
      }
    ]
  },
  {
    "id": "段成己",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字诚之，号菊轩，金末元初诗人。",
    "birth": 1199,
    "death": 1279,
    "works": [
      {
        "title": "菊轩",
        "type": "七言绝句",
        "content": "老去无心逐世荣，一间茅屋过平生。",
        "popularity": 780,
        "tags": [
          "隐逸",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "段克己",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字复之，号遁庵，段成己之兄。",
    "birth": 1196,
    "death": 1254,
    "works": [
      {
        "title": "遁庵",
        "type": "七言绝句",
        "content": "山中岁月长如许，世上功名薄似云。",
        "popularity": 780,
        "tags": [
          "隐逸",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "元好问",
    "group": 4,
    "val": 85,
    "color": "#34d399",
    "desc": "字裕之，号遗山，金末元初文学家、历史学家。",
    "birth": 1190,
    "death": 1257,
    "works": [
      {
        "title": "摸鱼儿·雁丘词",
        "type": "词",
        "content": "问世间，情是何物，直教生死相许？",
        "popularity": 1000,
        "tags": [
          "爱情",
          "名句"
        ]
      },
      {
        "title": "论诗三十首·其一",
        "type": "七言绝句",
        "content": "纵横正有凌云笔，俯仰随人亦可怜。",
        "popularity": 880,
        "tags": [
          "诗论",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "赵秉文",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "字周臣，号闲闲居士，金代文学家。",
    "birth": 1159,
    "death": 1232,
    "works": [
      {
        "title": "闲闲",
        "type": "七言律诗",
        "content": "一身傲骨凌霜雪，万里清风入梦魂。",
        "popularity": 820,
        "tags": [
          "气节",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "李纯甫",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字之纯，号屏山，金代文学家。",
    "birth": 1177,
    "death": 1223,
    "works": [
      {
        "title": "屏山",
        "type": "七言律诗",
        "content": "山色连天远，泉声入耳虚。",
        "popularity": 790,
        "tags": [
          "写景",
          "清新"
        ]
      }
    ]
  },
  {
    "id": "王若虚",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字从之，号慵夫，金末元初文学家。",
    "birth": 1174,
    "death": 1243,
    "works": [
      {
        "title": "慵夫",
        "type": "七言律诗",
        "content": "文章自古有神助，笔底风雷起万尘。",
        "popularity": 800,
        "tags": [
          "文学",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "张翥",
    "group": 4,
    "val": 71,
    "color": "#34d399",
    "desc": "字仲举，号蜕庵，元代诗人。",
    "birth": 1287,
    "death": 1368,
    "works": [
      {
        "title": "蜕庵",
        "type": "七言律诗",
        "content": "一身正气凌云志，万里清风入梦魂。",
        "popularity": 810,
        "tags": [
          "志向",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "纳赫",
    "group": 4,
    "val": 65,
    "color": "#34d399",
    "desc": "元代诗人。",
    "birth": 1280,
    "death": 1340,
    "works": [
      {
        "title": "无题",
        "type": "七言绝句",
        "content": "山高不碍白云飞，水远能随明月归。",
        "popularity": 740,
        "tags": [
          "写景",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "范梈",
    "group": 4,
    "val": 74,
    "color": "#34d399",
    "desc": "字亨父，号德机，'元诗四大家'之一。",
    "birth": 1272,
    "death": 1330,
    "works": [
      {
        "title": "赠别",
        "type": "七言律诗",
        "content": "海内知名君第一，天涯相见我重逢。",
        "popularity": 820,
        "tags": [
          "友情",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "虞集",
    "group": 4,
    "val": 76,
    "color": "#34d399",
    "desc": "字伯生，号道园，'元诗四大家'之首。",
    "birth": 1272,
    "death": 1348,
    "works": [
      {
        "title": "风入松",
        "type": "词",
        "content": "杏花春雨江南。",
        "popularity": 950,
        "tags": [
          "名句",
          "江南"
        ]
      }
    ]
  },
  {
    "id": "揭傒斯",
    "group": 4,
    "val": 73,
    "color": "#34d399",
    "desc": "字曼硕，'元诗四大家'之一。",
    "birth": 1274,
    "death": 1344,
    "works": [
      {
        "title": "秋雁",
        "type": "七言绝句",
        "content": "一声长笛起楼头，万点寒鸦散水洲。",
        "popularity": 840,
        "tags": [
          "写景",
          "秋思"
        ]
      }
    ]
  },
  {
    "id": "柳贯",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "字道传，号乌蜀山人，'元诗四大家'之一。",
    "birth": 1270,
    "death": 1342,
    "works": [
      {
        "title": "题画",
        "type": "七言绝句",
        "content": "墨痕深处见精神，笔底风雷起万尘。",
        "popularity": 810,
        "tags": [
          "艺术",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "黄溍",
    "group": 4,
    "val": 71,
    "color": "#34d399",
    "desc": "字晋卿，号日损斋，元代文学家。",
    "birth": 1277,
    "death": 1357,
    "works": [
      {
        "title": "日损斋",
        "type": "七言律诗",
        "content": "文章自古有神助，笔底风雷起万尘。",
        "popularity": 810,
        "tags": [
          "文学",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "宋濂",
    "group": 4,
    "val": 80,
    "color": "#34d399",
    "desc": "字景濂，号潜溪，元末明初文学家。",
    "birth": 1310,
    "death": 1381,
    "works": [
      {
        "title": "送东阳马生序(节选)",
        "type": "散文",
        "content": "余幼时即嗜学。家贫，无从致书以观。",
        "popularity": 980,
        "tags": [
          "励志",
          "名篇"
        ]
      }
    ]
  },
  {
    "id": "吉安",
    "group": 4,
    "val": 64,
    "color": "#34d399",
    "desc": "元代诗人。",
    "birth": 1280,
    "death": 1340,
    "works": [
      {
        "title": "无题",
        "type": "七言绝句",
        "content": "山色连天远，泉声入耳虚。",
        "popularity": 780,
        "tags": [
          "写景",
          "清新"
        ]
      }
    ]
  },
  {
    "id": "陈旅",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字众仲，元代诗人。",
    "birth": 1288,
    "death": 1343,
    "works": [
      {
        "title": "众仲",
        "type": "七言绝句",
        "content": "万里风烟接大荒，孤城落日满凄凉。",
        "popularity": 790,
        "tags": [
          "边塞",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "朱德润",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "字泽民，元代诗人、画家。",
    "birth": 1294,
    "death": 1365,
    "works": [
      {
        "title": "泽民",
        "type": "七言绝句",
        "content": "一江春水绕孤村，半入云山半入云。",
        "popularity": 800,
        "tags": [
          "写景",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "顾瑛",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字仲瑛，号金粟道人，元代诗人。",
    "birth": 1310,
    "death": 1369,
    "works": [
      {
        "title": "金粟",
        "type": "七言律诗",
        "content": "风流文采今何在，满目荒凉动客愁。",
        "popularity": 820,
        "tags": [
          "感怀",
          "怀旧"
        ]
      }
    ]
  },
  {
    "id": "倪瓒",
    "group": 4,
    "val": 78,
    "color": "#34d399",
    "desc": "字元镇，号云林子，元代诗人、画家。",
    "birth": 1301,
    "death": 1374,
    "works": [
      {
        "title": "题画",
        "type": "七言绝句",
        "content": "一琴一鹤随行脚，半榻半窗看落花。",
        "popularity": 890,
        "tags": [
          "隐逸",
          "艺术"
        ]
      }
    ]
  },
  {
    "id": "黄公望",
    "group": 4,
    "val": 77,
    "color": "#34d399",
    "desc": "字子久，号一峰道人，元代画家、诗人。",
    "birth": 1269,
    "death": 1354,
    "works": [
      {
        "title": "题画",
        "type": "七言绝句",
        "content": "远山如黛近山青，流水潺潺绕草亭。",
        "popularity": 840,
        "tags": [
          "写景",
          "艺术"
        ]
      }
    ]
  },
  {
    "id": "王蒙",
    "group": 4,
    "val": 75,
    "color": "#34d399",
    "desc": "字叔明，号香光居士，元代画家、诗人。",
    "birth": 1308,
    "death": 1385,
    "works": [
      {
        "title": "香光",
        "type": "七言律诗",
        "content": "山水氤氲入画图，此中真意有谁知。",
        "popularity": 810,
        "tags": [
          "艺术",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "吴镇",
    "group": 4,
    "val": 74,
    "color": "#34d399",
    "desc": "字仲圭，号梅花道人，元代画家、诗人。",
    "birth": 1280,
    "death": 1354,
    "works": [
      {
        "title": "梅花",
        "type": "七言绝句",
        "content": "墨痕深处见精神，冷艳清香入梦频。",
        "popularity": 840,
        "tags": [
          "咏物",
          "艺术"
        ]
      }
    ]
  },
  {
    "id": "柯九思",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字敬仲，号丹丘生，元代诗人、书画家。",
    "birth": 1290,
    "death": 1343,
    "works": [
      {
        "title": "丹丘",
        "type": "七言绝句",
        "content": "笔底春风生万象，画中意境入神思。",
        "popularity": 820,
        "tags": [
          "艺术",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "赵孟頫",
    "group": 4,
    "val": 82,
    "color": "#34d399",
    "desc": "字子昂，号松雪道人，元代书画家、诗人。",
    "birth": 1254,
    "death": 1322,
    "works": [
      {
        "title": "岳阳楼",
        "type": "七言律诗",
        "content": "洞庭春水绿如油，日暮孤舟解不收。",
        "popularity": 880,
        "tags": [
          "写景",
          "岳阳楼"
        ]
      },
      {
        "title": "自题画",
        "type": "七言绝句",
        "content": "石如飞白木如籀，写竹还应八法通。",
        "popularity": 860,
        "tags": [
          "艺术",
          "理论"
        ]
      }
    ]
  },
  {
    "id": "管道昇",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "字仲姬，赵孟頫之妻，元代女诗人、书画家。",
    "birth": 1262,
    "death": 1319,
    "works": [
      {
        "title": "我侬词",
        "type": "词",
        "content": "你侬我侬，忒煞情多；情多处，热似火；把一块泥，捻一个你，塑一个我。",
        "popularity": 970,
        "tags": [
          "爱情",
          "民歌"
        ]
      }
    ]
  },
  {
    "id": "孙作",
    "group": 4,
    "val": 66,
    "color": "#34d399",
    "desc": "字大雅，元代诗人。",
    "birth": 1300,
    "death": 1370,
    "works": [
      {
        "title": "大雅",
        "type": "七言律诗",
        "content": "文采风流今尚在，一身正气满乾坤。",
        "popularity": 790,
        "tags": [
          "赞美",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "谢应芳",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字子兰，号龟巢，元代诗人。",
    "birth": 1295,
    "death": 1392,
    "works": [
      {
        "title": "龟巢",
        "type": "七言绝句",
        "content": "老去无心逐世荣，一间茅屋过平生。",
        "popularity": 800,
        "tags": [
          "隐逸",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "戴良",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "字叔能，号九灵山人，元末明初诗人。",
    "birth": 1317,
    "death": 1383,
    "works": [
      {
        "title": "九灵山",
        "type": "七言律诗",
        "content": "山中岁月长如许，世上功名薄似云。",
        "popularity": 810,
        "tags": [
          "隐逸",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "杨基",
    "group": 1,
    "val": 73,
    "color": "#fbbf24",
    "desc": "字孟载，号眉庵，'吴中四杰'之一。",
    "birth": 1326,
    "death": 1378,
    "works": [
      {
        "title": "眉庵",
        "type": "七言律诗",
        "content": "一窗明月半床书，此中滋味胜当初。",
        "popularity": 830,
        "tags": [
          "读书",
          "闲适"
        ]
      }
    ]
  },
  {
    "id": "徐贲",
    "group": 1,
    "val": 70,
    "color": "#fbbf24",
    "desc": "字幼文，'吴中四杰'之一。",
    "birth": 1335,
    "death": 1380,
    "works": [
      {
        "title": "吴中",
        "type": "七言绝句",
        "content": "烟雨江南春色好，柳丝摇曳满长堤。",
        "popularity": 820,
        "tags": [
          "写景",
          "江南"
        ]
      }
    ]
  },
  {
    "id": "丁鹤年",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字永庚，元末明初诗人。",
    "birth": 1335,
    "death": 1424,
    "works": [
      {
        "title": "自述",
        "type": "七言律诗",
        "content": "白发苍颜老更坚，一身傲骨对苍天。",
        "popularity": 840,
        "tags": [
          "气节",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "王冕",
    "group": 4,
    "val": 75,
    "color": "#34d399",
    "desc": "字元章，号煮石山农，元代诗人、画家。",
    "birth": 1287,
    "death": 1359,
    "works": [
      {
        "title": "墨梅",
        "type": "七言绝句",
        "content": "我家洗砚池头树，朵朵花开淡墨痕。不要人夸好颜色，只留清气满乾坤。",
        "popularity": 980,
        "tags": [
          "咏物",
          "高洁"
        ]
      },
      {
        "title": "白梅",
        "type": "七言绝句",
        "content": "冰雪林中著此身，不同桃李混芳尘。",
        "popularity": 910,
        "tags": [
          "咏物",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "陈高",
    "group": 4,
    "val": 66,
    "color": "#34d399",
    "desc": "字子上，号不系舟渔者，元代诗人。",
    "birth": 1315,
    "death": 1367,
    "works": [
      {
        "title": "不系舟",
        "type": "七言绝句",
        "content": "随风漂泊无定所，任尔东西南北风。",
        "popularity": 800,
        "tags": [
          "隐逸",
          "自由"
        ]
      }
    ]
  },
  {
    "id": "李孝光",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字季和，号五峰，元代诗人。",
    "birth": 1285,
    "death": 1350,
    "works": [
      {
        "title": "五峰",
        "type": "七言律诗",
        "content": "山高不碍白云飞，水远能随明月归。",
        "popularity": 810,
        "tags": [
          "写景",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "泰不华",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字兼善，元代诗人、官员。",
    "birth": 1304,
    "death": 1352,
    "works": [
      {
        "title": "兼善",
        "type": "七言绝句",
        "content": "一身正气凌云志，万里清风入梦魂。",
        "popularity": 820,
        "tags": [
          "志向",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "迺贤",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "字易之，号河朔外史，元代诗人。",
    "birth": 1309,
    "death": 1368,
    "works": [
      {
        "title": "河朔外史",
        "type": "七言律诗",
        "content": "万里风烟接大荒，孤城落日满凄凉。",
        "popularity": 810,
        "tags": [
          "边塞",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "马祖常",
    "group": 4,
    "val": 71,
    "color": "#34d399",
    "desc": "字伯庸，号石田，元代诗人。",
    "birth": 1279,
    "death": 1338,
    "works": [
      {
        "title": "石田",
        "type": "七言律诗",
        "content": "山色连天远，泉声入耳虚。",
        "popularity": 830,
        "tags": [
          "写景",
          "清新"
        ]
      }
    ]
  },
  {
    "id": "贯云石",
    "group": 4,
    "val": 73,
    "color": "#34d399",
    "desc": "号酸斋，元代散曲家。",
    "birth": 1286,
    "death": 1324,
    "works": [
      {
        "title": "清江引·咏梅",
        "type": "散曲",
        "content": "南枝嫩蕊北枝开，芳气随风过岭来。",
        "popularity": 880,
        "tags": [
          "咏物",
          "清新"
        ]
      }
    ]
  },
  {
    "id": "小德善",
    "group": 4,
    "val": 65,
    "color": "#34d399",
    "desc": "元代散曲家。",
    "birth": 1290,
    "death": 1350,
    "works": [
      {
        "title": "无题",
        "type": "散曲",
        "content": "随风漂泊无定所，任尔东西南北风。",
        "popularity": 750,
        "tags": [
          "自由",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "厮厮",
    "group": 4,
    "val": 64,
    "color": "#34d399",
    "desc": "元代散曲家。",
    "birth": 1290,
    "death": 1350,
    "works": [
      {
        "title": "无题",
        "type": "散曲",
        "content": "人生如梦，富贵如烟。",
        "popularity": 760,
        "tags": [
          "感怀",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "郑彦",
    "group": 4,
    "val": 64,
    "color": "#34d399",
    "desc": "元代诗人。",
    "birth": 1280,
    "death": 1340,
    "works": [
      {
        "title": "无题",
        "type": "七言绝句",
        "content": "风烟万里接长空，落日孤城满目红。",
        "popularity": 770,
        "tags": [
          "写景",
          "边塞"
        ]
      }
    ]
  },
  {
    "id": "周德清",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字日湛，号挺斋，元代音韵学家、散曲家。",
    "birth": 1277,
    "death": 1365,
    "works": [
      {
        "title": "中原音韵序",
        "type": "散文",
        "content": "欲正其音，先正其心。",
        "popularity": 820,
        "tags": [
          "理论",
          "名句"
        ]
      }
    ]
  },
  {
    "id": "钟嗣成",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "字继先，号丑斋，元代戏曲家，著《录鬼簿》。",
    "birth": 1275,
    "death": 1345,
    "works": [
      {
        "title": "录鬼簿序",
        "type": "散文",
        "content": "古今才人，多不幸而死。",
        "popularity": 850,
        "tags": [
          "文学",
          "感叹"
        ]
      }
    ]
  },
  {
    "id": "夏庭芝",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "字伯和，号雪蓑，元代戏曲家。",
    "birth": 1300,
    "death": 1375,
    "works": [
      {
        "title": "雪蓑",
        "type": "七言绝句",
        "content": "一身傲骨凌霜雪，万里清风入梦魂。",
        "popularity": 800,
        "tags": [
          "气节",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "陶宗仪",
    "group": 4,
    "val": 71,
    "color": "#34d399",
    "desc": "字九成，号南村，元代文学家，著《南村辍耕录》。",
    "birth": 1316,
    "death": 1403,
    "works": [
      {
        "title": "南村",
        "type": "七言绝句",
        "content": "耕云种月过平生，不逐荣华不逐名。",
        "popularity": 830,
        "tags": [
          "隐逸",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "陆志",
    "group": 4,
    "val": 63,
    "color": "#34d399",
    "desc": "元代诗人。",
    "birth": 1290,
    "death": 1350,
    "works": [
      {
        "title": "无题",
        "type": "七言绝句",
        "content": "风烟万里接长空，落日孤城满目红。",
        "popularity": 730,
        "tags": [
          "写景",
          "边塞"
        ]
      }
    ]
  },
  {
    "id": "钱惟善",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字思复，号静默居士，元代诗人。",
    "birth": 1290,
    "death": 1369,
    "works": [
      {
        "title": "静默",
        "type": "七言律诗",
        "content": "一身正气凌云志，万里清风入梦魂。",
        "popularity": 790,
        "tags": [
          "志向",
          "气节"
        ]
      }
    ]
  },
  {
    "id": "李祁",
    "group": 4,
    "val": 66,
    "color": "#34d399",
    "desc": "字一初，号稀微道人，元代诗人。",
    "birth": 1299,
    "death": 1370,
    "works": [
      {
        "title": "稀微",
        "type": "七言律诗",
        "content": "山高不碍白云飞，水远能随明月归。",
        "popularity": 780,
        "tags": [
          "写景",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "程节夫",
    "group": 4,
    "val": 64,
    "color": "#34d399",
    "desc": "元代诗人。",
    "birth": 1285,
    "death": 1345,
    "works": [
      {
        "title": "无题",
        "type": "七言绝句",
        "content": "随风漂泊无定所，任尔东西南北风。",
        "popularity": 750,
        "tags": [
          "自由",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "冯子振",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "字海粟，号瀛洲客，元代散曲家。",
    "birth": 1257,
    "death": 1337,
    "works": [
      {
        "title": "鹦鹉曲",
        "type": "散曲",
        "content": "孤村落日残霞，轻烟老树寒鸦。",
        "popularity": 860,
        "tags": [
          "写景",
          "秋天"
        ]
      }
    ]
  },
  {
    "id": "曾瑞",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "字瑞卿，号褐夫，元代散曲家。",
    "birth": 1260,
    "death": 1320,
    "works": [
      {
        "title": "哨遍",
        "type": "散曲",
        "content": "人生如梦，富贵如烟。",
        "popularity": 840,
        "tags": [
          "感怀",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "王和卿",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "元代散曲家。",
    "birth": 1260,
    "death": 1320,
    "works": [
      {
        "title": "醉中天·咏大蝴蝶",
        "type": "散曲",
        "content": "挣破庄周梦，两翅驾东风。",
        "popularity": 910,
        "tags": [
          "幽默",
          "咏物"
        ]
      }
    ]
  },
  {
    "id": "白珽",
    "group": 4,
    "val": 66,
    "color": "#34d399",
    "desc": "字廷玉，号湛渊，元代诗人。",
    "birth": 1248,
    "death": 1328,
    "works": [
      {
        "title": "湛渊",
        "type": "七言律诗",
        "content": "白发苍颜老更坚，一身傲骨对苍天。",
        "popularity": 790,
        "tags": [
          "气节",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "方回",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字万里，号虚谷，元代诗人、诗论家。",
    "birth": 1227,
    "death": 1307,
    "works": [
      {
        "title": "诗评",
        "type": "七言绝句",
        "content": "格律精严见古心，诗家风范到如今。",
        "popularity": 820,
        "tags": [
          "诗论",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "仇远",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "字仁近，号山村民，元代诗人。",
    "birth": 1247,
    "death": 1326,
    "works": [
      {
        "title": "题画",
        "type": "七言绝句",
        "content": "一江春水向东流，半入云山半入楼。",
        "popularity": 830,
        "tags": [
          "写景",
          "艺术"
        ]
      }
    ]
  },
  {
    "id": "戴表元",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字帅初，号剡源，元代文学家。",
    "birth": 1244,
    "death": 1310,
    "works": [
      {
        "title": "剡源",
        "type": "七言律诗",
        "content": "山中岁月无甲子，世上繁华有盛衰。",
        "popularity": 850,
        "tags": [
          "感怀",
          "哲理"
        ]
      }
    ]
  }
],
  links: [
    {
      "source": "关汉卿",
      "target": "马致远",
      "value": 8,
      "type": "合称"
    },
    {
      "source": "关汉卿",
      "target": "郑光祖",
      "value": 7,
      "type": "合称"
    },
    {
      "source": "关汉卿",
      "target": "白朴",
      "value": 7,
      "type": "合称",
      "description": "均为'元曲四大家'成员，共同推动了元杂剧的兴盛。"
    },
    {
      "source": "乔吉",
      "target": "张可久",
      "value": 8,
      "type": "合称",
      "description": "元代散曲双峰，世称'乔张'。"
    },
    {
      "source": "王实甫",
      "target": "关汉卿",
      "value": 6,
      "type": "同代",
      "description": "元代杂剧双雄，分别创作了《西厢记》与《窦娥冤》。"
    },
    {
      "source": "关汉卿",
      "target": "张养浩",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "睢景臣",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "乔吉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "张可久",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "萨都剌",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "刘因",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "许衡",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "刘祁",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "段成己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "段克己",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "元好问",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "王若虚",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "张翥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "纳赫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "范梈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "虞集",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "揭傒斯",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "柳贯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "黄溍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "吉安",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "陈旅",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "朱德润",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "黄公望",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "吴镇",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "柯九思",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "谢应芳",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "王冕",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "李孝光",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "小德善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "厮厮",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "郑彦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "周德清",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "钟嗣成",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "陆志",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "钱惟善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "程节夫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "关汉卿",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "郑光祖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "白朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "王实甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "张养浩",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "睢景臣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "乔吉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "张可久",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "高则诚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "杨维桢",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "刘因",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "许衡",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "段成己",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "元好问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "张翥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "宋濂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "朱德润",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "顾瑛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "倪瓒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "王蒙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "陈高",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "陶宗仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马致远",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "白朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "王实甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "张养浩",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "睢景臣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "乔吉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "张可久",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "高则诚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "杨维桢",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "刘因",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "许衡",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "段成己",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "张翥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "宋濂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "朱德润",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "顾瑛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "倪瓒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "王蒙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "戴良",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "陈高",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "泰不华",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "陶宗仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑光祖",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "王实甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "张养浩",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "睢景臣",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "乔吉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "张可久",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "萨都剌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "杨维桢",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "刘因",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "许衡",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "刘祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "段成己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "段克己",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "元好问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "赵秉文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "王若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "张翥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "纳赫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "范梈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "虞集",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "揭傒斯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "柳贯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "黄溍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "吉安",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "陈旅",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "朱德润",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "倪瓒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "黄公望",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "吴镇",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "柯九思",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "孙作",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "谢应芳",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "王冕",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "李孝光",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "小德善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "厮厮",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "郑彦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "周德清",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "夏庭芝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "陆志",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "钱惟善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "李祁",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "程节夫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白朴",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "张养浩",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "睢景臣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "乔吉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "张可久",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "高则诚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "杨维桢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "刘因",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "许衡",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "段成己",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "宋濂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "顾瑛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "倪瓒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "王蒙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "孙作",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "戴良",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "迺贤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "夏庭芝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王实甫",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "睢景臣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "乔吉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "张可久",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "高则诚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "杨维桢",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "刘因",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "许衡",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "段成己",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "宋濂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "朱德润",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "顾瑛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "倪瓒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "王蒙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "谢应芳",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "戴良",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "陈高",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "泰不华",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "迺贤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "陶宗仪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张养浩",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "乔吉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "张可久",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "康进之",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "高则诚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "杨维桢",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "刘因",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "许衡",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "张翥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "宋濂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "朱德润",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "顾瑛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "倪瓒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "王蒙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "陈高",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "睢景臣",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "康进之",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "高则诚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "杨维桢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "刘因",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "徐贲",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "丁鹤年",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "乔吉",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "纪君祥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "高则诚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "杨维桢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "刘因",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "许衡",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "段成己",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "戴良",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "杨基",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "徐贲",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "丁鹤年",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张可久",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "康进之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "高则诚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "杨维桢",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "刘因",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "许衡",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "段成己",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "张翥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "宋濂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "朱德润",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "顾瑛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "倪瓒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "王蒙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "陈高",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纪君祥",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "高则诚",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "萨都剌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "杨维桢",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "刘因",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "许衡",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "段成己",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "元好问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "张翥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "纳赫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "范梈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "虞集",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "揭傒斯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "黄溍",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "吉安",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "陈旅",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "朱德润",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "倪瓒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "吴镇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "柯九思",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "孙作",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "谢应芳",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "王冕",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "李孝光",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "泰不华",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "小德善",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "厮厮",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "周德清",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "夏庭芝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "陆志",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "钱惟善",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "李祁",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "程节夫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "康进之",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "萨都剌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "杨维桢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "纳赫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "范梈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "揭傒斯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "柳贯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "宋濂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "吉安",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "赵孟頫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "管道昇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高则诚",
      "target": "戴表元",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "杨维桢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "刘因",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "许衡",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "段成己",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "宋濂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "戴良",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "杨基",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "徐贲",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "丁鹤年",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "萨都剌",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "张翥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "范梈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "宋濂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "赵孟頫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "管道昇",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨维桢",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "许衡",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "段成己",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "段克己",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "元好问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "张翥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "纳赫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "范梈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "虞集",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "揭傒斯",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "柳贯",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "黄溍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "吉安",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "陈旅",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "黄公望",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "吴镇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "赵孟頫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "王冕",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "李孝光",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "马祖常",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "贯云石",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "郑彦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "周德清",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "钟嗣成",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "程节夫",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘因",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "刘祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "段成己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "段克己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "元好问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "赵秉文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "李纯甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "王若虚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "范梈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "虞集",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "揭傒斯",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "柳贯",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "黄公望",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "赵孟頫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "管道昇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "钟嗣成",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许衡",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "段成己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "段克己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "元好问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "赵秉文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "李纯甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘祁",
      "target": "戴表元",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "段克己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "元好问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "赵秉文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "李纯甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "范梈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "虞集",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "揭傒斯",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "柳贯",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "黄公望",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "赵孟頫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "管道昇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "段成己",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "元好问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "赵秉文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "李纯甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "白珽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "仇远",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "段克己",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "赵秉文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "李纯甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "白珽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元好问",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "赵秉文",
      "target": "李纯甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵秉文",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵秉文",
      "target": "方回",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李纯甫",
      "target": "王若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王若虚",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "纳赫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "宋濂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "赵孟頫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张翥",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "范梈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "倪瓒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "纳赫",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "虞集",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "宋濂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "朱德润",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "顾瑛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "倪瓒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "王蒙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "孙作",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "谢应芳",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "戴良",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "陈高",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "泰不华",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "迺贤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "夏庭芝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "陶宗仪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "范梈",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "揭傒斯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "戴良",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "杨基",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "徐贲",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "丁鹤年",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "虞集",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "柳贯",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "揭傒斯",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "黄溍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "宋濂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳贯",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "宋濂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "吉安",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "杨基",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "徐贲",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "丁鹤年",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄溍",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "吉安",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "陈旅",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "赵孟頫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "管道昇",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "徐贲",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋濂",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "陈旅",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "倪瓒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吉安",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "朱德润",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "顾瑛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "王蒙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "赵孟頫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈旅",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "顾瑛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "赵孟頫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "管道昇",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "杨基",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "朱德润",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "倪瓒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "赵孟頫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "管道昇",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾瑛",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "黄公望",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "赵孟頫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "管道昇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "方回",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "倪瓒",
      "target": "戴表元",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "王蒙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "戴良",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "杨基",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "徐贲",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "丁鹤年",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄公望",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "吴镇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "柯九思",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "赵孟頫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "管道昇",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "徐贲",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王蒙",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "柯九思",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "赵孟頫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "管道昇",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "戴良",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "杨基",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "徐贲",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "丁鹤年",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴镇",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "赵孟頫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "管道昇",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "孙作",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "戴良",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "杨基",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "徐贲",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "丁鹤年",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "陈高",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柯九思",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "管道昇",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "孙作",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "戴良",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "陈高",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "陶宗仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "赵孟頫",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "孙作",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "谢应芳",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "迺贤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "小德善",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "厮厮",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "夏庭芝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "陆志",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "钱惟善",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "管道昇",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "谢应芳",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "徐贲",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "丁鹤年",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "方回",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孙作",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "戴良",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "徐贲",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "谢应芳",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "杨基",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "徐贲",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "王冕",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "贯云石",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "郑彦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "钟嗣成",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "程节夫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴良",
      "target": "仇远",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "徐贲",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "王冕",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "李孝光",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "泰不华",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "马祖常",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "小德善",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "厮厮",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "郑彦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "周德清",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "钟嗣成",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "陆志",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "程节夫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨基",
      "target": "冯子振",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "丁鹤年",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "王冕",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "李孝光",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "小德善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "厮厮",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "郑彦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "周德清",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "钟嗣成",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "陆志",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "徐贲",
      "target": "程节夫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "王冕",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "陈高",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "李孝光",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "泰不华",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "迺贤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "小德善",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "厮厮",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "郑彦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "周德清",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "钟嗣成",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "陆志",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丁鹤年",
      "target": "程节夫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "陈高",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "李孝光",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王冕",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "李孝光",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "泰不华",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "贯云石",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "郑彦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "曾瑞",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "王和卿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈高",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "泰不华",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "马祖常",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李孝光",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "迺贤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "马祖常",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "贯云石",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "泰不华",
      "target": "戴表元",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "马祖常",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "贯云石",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "曾瑞",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "王和卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "迺贤",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "贯云石",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "小德善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "夏庭芝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "李祁",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马祖常",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "小德善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "厮厮",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "郑彦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "周德清",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "钟嗣成",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "夏庭芝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "陶宗仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "钱惟善",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "李祁",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "程节夫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯云石",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "厮厮",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "小德善",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "郑彦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "陶宗仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "厮厮",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "周德清",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑彦",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "钟嗣成",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周德清",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "夏庭芝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "陶宗仪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "方回",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟嗣成",
      "target": "戴表元",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "陶宗仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "陆志",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "方回",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "夏庭芝",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "陆志",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "程节夫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "冯子振",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "白珽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陶宗仪",
      "target": "仇远",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "钱惟善",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陆志",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "李祁",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "白珽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "方回",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "仇远",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱惟善",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "程节夫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "冯子振",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "曾瑞",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "王和卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "白珽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "方回",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "仇远",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李祁",
      "target": "戴表元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "冯子振",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "曾瑞",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "王和卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "方回",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "程节夫",
      "target": "戴表元",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "曾瑞",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "冯子振",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曾瑞",
      "target": "王和卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曾瑞",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曾瑞",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曾瑞",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曾瑞",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王和卿",
      "target": "白珽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王和卿",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王和卿",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王和卿",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白珽",
      "target": "方回",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白珽",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白珽",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方回",
      "target": "仇远",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方回",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "仇远",
      "target": "戴表元",
      "value": 5,
      "type": "同时代"
    }
  ]};
