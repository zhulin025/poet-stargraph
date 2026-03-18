import { Node, Link } from '../types';

export const tangData: { nodes: Node[], links: Link[] } = {
  nodes: [
  {
    "id": "李白",
    "group": 1,
    "val": 100,
    "color": "#fbbf24",
    "desc": "字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人誉为'诗仙'。",
    "birth": 701,
    "death": 762,
    "locations": ["长安", "洛阳", "蜀地", "浔阳", "梁宋"],
    "works": [
      {
        "title": "静夜思",
        "type": "五言绝句",
        "content": "床前明月光，疑是地上霜。举头望明月，低头思故乡。",
        "popularity": 1000,
        "tags": [
          "思乡",
          "月亮"
        ]
      },
      {
        "title": "将进酒",
        "type": "乐府",
        "content": "君不见黄河之水天上来，奔流到海不复回。君不见高堂明镜悲白发，朝如青丝暮成雪。人生得意须尽欢，莫使金樽空对月。天生我材必有用，千金散尽还复来。烹羊宰牛且为乐，会须一饮三百杯。岑夫子，丹丘生，将进酒，杯莫停。与君歌一曲，请君为我倾耳听。钟鼓馔玉不足贵，但愿长醉不复醒。古来圣贤皆寂寞，惟有饮者留其名。陈王昔时宴平乐，斗酒十千恣欢谑。主人何为言少钱，径须沽取对君酌。五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。",
        "popularity": 950,
        "tags": [
          "豪放",
          "劝酒"
        ]
      },
      {
        "title": "望庐山瀑布",
        "type": "七言绝句",
        "content": "日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。",
        "popularity": 940,
        "tags": [
          "写景",
          "庐山"
        ]
      },
      {
        "title": "早发白帝城",
        "type": "七言绝句",
        "content": "朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。",
        "popularity": 930,
        "tags": [
          "写景",
          "长江"
        ]
      },
      {
        "title": "赠汪伦",
        "type": "七言绝句",
        "content": "李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。",
        "popularity": 920,
        "isGift": true,
        "recipientId": "汪伦",
        "tags": [
          "友情",
          "送别"
        ]
      }
    ]
  },
  {
    "id": "杜甫",
    "group": 2,
    "val": 98,
    "color": "#60a5fa",
    "desc": "字子美，号少陵野老，唐代伟大的现实主义诗人，被后人誉为'诗圣'。",
    "birth": 712,
    "death": 770,
    "locations": ["长安", "洛阳", "成都", "夔州", "梁宋"],
    "works": [
      {
        "title": "春望",
        "type": "五言律诗",
        "content": "国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。",
        "popularity": 980,
        "tags": [
          "爱国",
          "忧民"
        ]
      },
      {
        "title": "登高",
        "type": "七言律诗",
        "content": "风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。",
        "popularity": 960,
        "tags": [
          "悲秋",
          "壮志未酬"
        ]
      },
      {
        "title": "绝句",
        "type": "七言绝句",
        "content": "两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。",
        "popularity": 950,
        "tags": [
          "写景",
          "春天"
        ]
      },
      {
        "title": "望岳",
        "type": "五言古诗",
        "content": "岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。",
        "popularity": 940,
        "tags": [
          "雄心",
          "泰山"
        ]
      },
      {
        "title": "茅屋为秋风所破歌",
        "type": "七言歌行",
        "content": "八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳...",
        "popularity": 930,
        "tags": [
          "忧民",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "白居易",
    "group": 3,
    "val": 95,
    "color": "#a78bfa",
    "desc": "字乐天，号香山居士，唐代伟大的现实主义诗人，新乐府运动的主要倡导者。",
    "birth": 772,
    "death": 846,
    "locations": ["长安", "杭州", "苏州", "洛阳", "浔阳"],
    "works": [
      {
        "title": "赋得古原草送别",
        "type": "五言律诗",
        "content": "离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。远芳侵古道，晴翠接荒城。又送王孙去，萋萋满别情。",
        "popularity": 940,
        "tags": [
          "送别",
          "生命力"
        ]
      },
      {
        "title": "琵琶行",
        "type": "乐府",
        "content": "浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月...",
        "popularity": 920,
        "tags": [
          "叙事",
          "音乐"
        ]
      },
      {
        "title": "长恨歌",
        "type": "歌行",
        "content": "汉皇重色思倾国，御宇多年求不得。杨家有女初长成，养在深闺人未识...",
        "popularity": 910,
        "tags": [
          "爱情",
          "史诗"
        ]
      },
      {
        "title": "钱塘湖春行",
        "type": "七言律诗",
        "content": "孤山寺北贾亭西，水面初平云脚低。几处早莺争暖树，谁家新燕啄春泥。乱花渐欲迷人眼，浅草才能没马蹄。最爱湖东行不足，绿杨阴里白沙堤。",
        "popularity": 900,
        "tags": [
          "写景",
          "西湖"
        ]
      },
      {
        "title": "暮江吟",
        "type": "七言绝句",
        "content": "一道残阳铺水中，半江瑟瑟半江红。可怜九月初三夜，露似真珠月似弓。",
        "popularity": 890,
        "tags": [
          "写景",
          "秋天"
        ]
      }
    ]
  },
  {
    "id": "王维",
    "group": 4,
    "val": 92,
    "color": "#34d399",
    "desc": "字摩诘，号摩诘居士，唐代著名诗人、画家，被誉为'诗佛'。",
    "birth": 701,
    "death": 761,
    "locations": ["长安", "辋川"],
    "works": [
      {
        "title": "相思",
        "type": "五言绝句",
        "content": "红豆生南国，春来发几枝。愿君多采撷，此物最相思。",
        "popularity": 930,
        "tags": [
          "相思",
          "红豆"
        ]
      },
      {
        "title": "鹿柴",
        "type": "五言绝句",
        "content": "空山不见人，但闻人语响。返景入深林，复照青苔上。",
        "popularity": 910,
        "tags": [
          "山水",
          "禅意"
        ]
      },
      {
        "title": "山居秋暝",
        "type": "五言律诗",
        "content": "空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。",
        "popularity": 920,
        "tags": [
          "山水",
          "隐逸"
        ]
      },
      {
        "title": "送元二使安西",
        "type": "七言绝句",
        "content": "渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。",
        "popularity": 940,
        "tags": [
          "送别",
          "友情"
        ]
      },
      {
        "title": "九月九日忆山东兄弟",
        "type": "七言绝句",
        "content": "独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。",
        "popularity": 950,
        "tags": [
          "思乡",
          "重阳"
        ]
      }
    ]
  },
  {
    "id": "李商隐",
    "group": 5,
    "val": 88,
    "color": "#f472b6",
    "desc": "字义山，号玉谿生，晚唐著名诗人，与杜牧合称'小李杜'。",
    "birth": 813,
    "death": 858,
    "works": [
      {
        "title": "锦瑟",
        "type": "七言律诗",
        "content": "锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。",
        "popularity": 890,
        "tags": [
          "爱情",
          "朦胧"
        ]
      },
      {
        "title": "无题",
        "type": "七言律诗",
        "content": "相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。",
        "popularity": 880,
        "tags": [
          "爱情",
          "思念"
        ]
      },
      {
        "title": "夜雨寄北",
        "type": "七言绝句",
        "content": "君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。",
        "popularity": 910,
        "tags": [
          "思念",
          "爱情"
        ]
      },
      {
        "title": "嫦娥",
        "type": "七言绝句",
        "content": "云母屏风烛影深，长河渐落晓星沉。嫦娥应悔偷灵药，碧海青天夜夜心。",
        "popularity": 870,
        "tags": [
          "神话",
          "孤独"
        ]
      },
      {
        "title": "乐游原",
        "type": "五言绝句",
        "content": "向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。",
        "popularity": 900,
        "tags": [
          "感怀",
          "名句"
        ]
      }
    ]
  },
  {
    "id": "杜牧",
    "group": 5,
    "val": 86,
    "color": "#f472b6",
    "desc": "字牧之，号樊川居士，晚唐杰出诗人，与李商隐合称'小李杜'。",
    "birth": 803,
    "death": 852,
    "works": [
      {
        "title": "清明",
        "type": "七言绝句",
        "content": "清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。",
        "popularity": 920,
        "tags": [
          "清明",
          "节日"
        ]
      }
    ]
  },
  {
    "id": "孟浩然",
    "group": 4,
    "val": 84,
    "color": "#34d399",
    "desc": "字浩然，号孟山人，唐代山水田园诗派代表人物，与王维并称'王孟'。",
    "birth": 689,
    "death": 740,
    "works": [
      {
        "title": "春晓",
        "type": "五言绝句",
        "content": "春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。",
        "popularity": 950,
        "tags": [
          "春天",
          "自然"
        ]
      }
    ]
  },
  {
    "id": "王昌龄",
    "group": 7,
    "val": 85,
    "color": "#ef4444",
    "desc": "字少伯，盛唐著名边塞诗人，被誉为'七绝圣手'、'诗家夫子'。",
    "birth": 698,
    "death": 757,
    "locations": ["长安", "龙标", "边塞"],
    "works": [
      {
        "title": "出塞",
        "type": "七言绝句",
        "content": "秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。",
        "popularity": 940,
        "tags": [
          "边塞",
          "爱国"
        ]
      },
      {
        "title": "从军行七首·其四",
        "type": "七言绝句",
        "content": "黄沙百战穿金甲，不破楼兰终不还。",
        "popularity": 930,
        "tags": ["边塞", "豪壮"]
      }
    ]
  },
  {
    "id": "高适",
    "group": 7,
    "val": 80,
    "color": "#ef4444",
    "desc": "字达夫，盛唐边塞诗派代表人物，与岑参并称'高岑'。",
    "birth": 704,
    "death": 765,
    "works": [
      {
        "title": "别董大",
        "type": "七言绝句",
        "content": "千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君。",
        "popularity": 950,
        "tags": [
          "送别",
          "豪迈"
        ]
      }
    ]
  },
  {
    "id": "岑参",
    "group": 7,
    "val": 79,
    "color": "#ef4444",
    "desc": "盛唐边塞诗派代表人物，与高适并称'高岑'，以写边塞风光著称。",
    "birth": 715,
    "death": 770,
    "works": [
      {
        "title": "白雪歌送武判官归京",
        "type": "七言歌行",
        "content": "北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。",
        "popularity": 960,
        "tags": [
          "边塞",
          "雪景"
        ]
      }
    ]
  },
  {
    "id": "韩愈",
    "group": 6,
    "val": 90,
    "color": "#fb923c",
    "desc": "字退之，唐代文学家、哲学家，古文运动倡导者，'唐宋八大家'之首。",
    "birth": 768,
    "death": 824,
    "works": [
      {
        "title": "早春呈水部张十八员外",
        "type": "七言绝句",
        "content": "天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。",
        "popularity": 930,
        "tags": [
          "早春",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "刘禹锡",
    "group": 6,
    "val": 83,
    "color": "#fb923c",
    "desc": "字梦得，唐代文学家、哲学家，与白居易并称'刘白'。",
    "birth": 772,
    "death": 842,
    "works": [
      {
        "title": "陋室铭",
        "type": "骈文",
        "content": "山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。",
        "popularity": 960,
        "tags": [
          "高洁",
          "志趣"
        ]
      }
    ]
  },
  {
    "id": "柳宗元",
    "group": 6,
    "val": 87,
    "color": "#fb923c",
    "desc": "字子厚，唐代文学家、哲学家，'唐宋八大家'之一，与韩愈并称'韩柳'。",
    "birth": 773,
    "death": 819,
    "works": [
      {
        "title": "江雪",
        "type": "五言绝句",
        "content": "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。",
        "popularity": 950,
        "tags": [
          "孤独",
          "雪景"
        ]
      }
    ]
  },
  {
    "id": "李贺",
    "group": 1,
    "val": 81,
    "color": "#fbbf24",
    "desc": "字长吉，中唐浪漫主义诗人，有'诗鬼'之称。",
    "birth": 790,
    "death": 816,
    "works": [
      {
        "title": "雁门太守行",
        "type": "乐府",
        "content": "黑云压城城欲摧，甲光向日金鳞开。角声满天秋色里，塞上燕脂凝夜紫。",
        "popularity": 910,
        "tags": [
          "战争",
          "悲壮"
        ]
      }
    ]
  },
  {
    "id": "王之涣",
    "group": 1,
    "val": 75,
    "color": "#fbbf24",
    "desc": "字季凌，盛唐著名诗人，以《登鹳雀楼》闻名于世。",
    "birth": 688,
    "death": 742,
    "works": [
      {
        "title": "登鹳雀楼",
        "type": "五言绝句",
        "content": "白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
        "popularity": 990,
        "tags": [
          "励志",
          "登高"
        ]
      }
    ]
  },
  {
    "id": "崔颢",
    "group": 1,
    "val": 74,
    "color": "#fbbf24",
    "desc": "盛唐诗人，以《黄鹤楼》一诗闻名，李白曾为之搁笔。",
    "birth": 704,
    "death": 754,
    "works": [
      {
        "title": "黄鹤楼",
        "type": "七言律诗",
        "content": "昔人已乘黄鹤去，此地空余黄鹤楼。黄鹤一去不复返，白云千载空悠悠。",
        "popularity": 970,
        "tags": [
          "怀古",
          "思乡"
        ]
      }
    ]
  },
  {
    "id": "韦应物",
    "group": 4,
    "val": 76,
    "color": "#34d399",
    "desc": "唐代山水田园诗派代表人物，与王维、孟浩然、柳宗元并称'王孟韦柳'。",
    "birth": 737,
    "death": 792,
    "works": [
      {
        "title": "滁州西涧",
        "type": "七言绝句",
        "content": "独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。",
        "popularity": 920,
        "tags": [
          "山水",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "贾岛",
    "group": 2,
    "val": 73,
    "color": "#60a5fa",
    "desc": "字阆仙，号碣石山人，唐代苦吟派诗人，与孟郊并称'郊寒岛瘦'。",
    "birth": 779,
    "death": 843,
    "works": [
      {
        "title": "寻隐者不遇",
        "type": "五言绝句",
        "content": "松下问童子，言师采药去。只在此山中，云深不知处。",
        "popularity": 940,
        "tags": [
          "寻访",
          "隐逸"
        ]
      }
    ]
  },
  {
    "id": "孟郊",
    "group": 2,
    "val": 72,
    "color": "#60a5fa",
    "desc": "字东野，唐代苦吟派诗人，与贾岛并称'郊寒岛瘦'。",
    "birth": 751,
    "death": 814,
    "works": [
      {
        "title": "游子吟",
        "type": "五言古体诗",
        "content": "慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。",
        "popularity": 980,
        "tags": [
          "母爱",
          "亲情"
        ]
      }
    ]
  },
  {
    "id": "元稹",
    "group": 3,
    "val": 80,
    "color": "#a78bfa",
    "desc": "字微之，唐代著名诗人，与白居易共同倡导新乐府运动，世称'元白'。",
    "birth": 779,
    "death": 831,
    "works": [
      {
        "title": "离思五首·其四",
        "type": "七言绝句",
        "content": "曾经沧海难为水，除却巫山不是云。取次花丛懒回顾，半缘修道半缘君。",
        "popularity": 950,
        "tags": [
          "爱情",
          "悼亡"
        ]
      }
    ]
  },
  {
    "id": "卢照邻",
    "group": 4,
    "val": 78,
    "color": "#34d399",
    "desc": "字升之，号幽忧子，'初唐四杰'之一。",
    "birth": 634,
    "death": 686,
    "works": [
      {
        "title": "长安古意",
        "type": "七言歌行",
        "content": "长安大道连狭斜，青牛白马七香车。玉辇纵横过主第，金鞭络绎向侯家。",
        "popularity": 870,
        "tags": [
          "繁华",
          "感叹"
        ]
      }
    ]
  },
  {
    "id": "王勃",
    "group": 4,
    "val": 85,
    "color": "#34d399",
    "desc": "字子安，'初唐四杰'之首，代表作《滕王阁序》。",
    "birth": 650,
    "death": 676,
    "works": [
      {
        "title": "送杜少府之任蜀州",
        "type": "五言律诗",
        "content": "城阙辅三秦，风烟望五津。与君离别意，同是宦游人。",
        "popularity": 950,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "杨炯",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "'初唐四杰'之一，以边塞诗著称。",
    "birth": 650,
    "death": 693,
    "works": [
      {
        "title": "从军行",
        "type": "五言律诗",
        "content": "烽火照西京，心中自不平。牙璋辞凤阙，铁骑绕龙城。",
        "popularity": 920,
        "tags": [
          "边塞",
          "报国"
        ]
      }
    ]
  },
  {
    "id": "骆宾王",
    "group": 4,
    "val": 76,
    "color": "#34d399",
    "desc": "'初唐四杰'之一，七岁作《咏鹅》。",
    "birth": 619,
    "death": 687,
    "works": [
      {
        "title": "咏鹅",
        "type": "五言古诗",
        "content": "鹅，鹅，鹅，曲项向天歌。白毛浮绿水，红掌拨清波。",
        "popularity": 1000,
        "tags": [
          "童趣",
          "咏物"
        ]
      }
    ]
  },
  {
    "id": "陈子昂",
    "group": 4,
    "val": 82,
    "color": "#34d399",
    "desc": "字伯玉，初唐诗歌革新先驱，代表作《登幽州台歌》。",
    "birth": 661,
    "death": 702,
    "works": [
      {
        "title": "登幽州台歌",
        "type": "古诗",
        "content": "前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。",
        "popularity": 940,
        "tags": [
          "孤独",
          "时空"
        ]
      }
    ]
  },
  {
    "id": "张若虚",
    "group": 4,
    "val": 77,
    "color": "#34d399",
    "desc": "唐代诗人，以《春江花月夜》闻名，有'孤篇横绝'之誉。",
    "birth": 660,
    "death": 720,
    "works": [
      {
        "title": "春江花月夜",
        "type": "乐府",
        "content": "春江潮水连海平，海上明月共潮生。滟滟随波千万里，何处春江无月明！",
        "popularity": 970,
        "tags": [
          "唯美",
          "哲理"
        ]
      }
    ]
  },
  {
    "id": "贺知章",
    "group": 4,
    "val": 79,
    "color": "#34d399",
    "desc": "字季真，号四明狂客，'吴中四士'之一，李白好友。",
    "birth": 659,
    "death": 744,
    "works": [
      {
        "title": "回乡偶书",
        "type": "七言绝句",
        "content": "少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。",
        "popularity": 930,
        "tags": [
          "思乡",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "张九龄",
    "group": 1,
    "val": 81,
    "color": "#fbbf24",
    "desc": "字子寿，盛唐著名诗人、政治家，代表作《望月怀远》。",
    "birth": 678,
    "death": 740,
    "works": [
      {
        "title": "望月怀远",
        "type": "五言律诗",
        "content": "海上生明月，天涯共此时。情人怨遥夜，竟夕起相思。",
        "popularity": 920,
        "tags": [
          "思念",
          "月亮"
        ]
      }
    ]
  },
  {
    "id": "韩翃",
    "group": 7,
    "val": 70,
    "color": "#ef4444",
    "desc": "字君平，'大历十才子'之一，代表作《寒食》。",
    "birth": 710,
    "death": 785,
    "works": [
      {
        "title": "寒食",
        "type": "七言绝句",
        "content": "春城无处不飞花，寒食东风御柳斜。日暮汉宫传蜡烛，轻烟散入五侯家。",
        "popularity": 930,
        "tags": [
          "节日",
          "讽刺"
        ]
      }
    ]
  },
  {
    "id": "李益",
    "group": 7,
    "val": 75,
    "color": "#ef4444",
    "desc": "字君虞，中唐边塞诗人，擅长七绝。",
    "birth": 748,
    "death": 829,
    "works": [
      {
        "title": "夜上受降城闻笛",
        "type": "七言绝句",
        "content": "回乐峰前沙似雪，受降城外月如霜。不知何处吹芦管，一夜征人尽望乡。",
        "popularity": 940,
        "tags": [
          "边塞",
          "思乡"
        ]
      }
    ]
  },
  {
    "id": "钱起",
    "group": 7,
    "val": 71,
    "color": "#ef4444",
    "desc": "'大历十才子'之首，以五言诗见长。",
    "birth": 722,
    "death": 780,
    "works": [
      {
        "title": "省试湘灵鼓瑟",
        "type": "五言律诗",
        "content": "善鼓瑟者，湘灵也。冯夷空自舞，楚客不堪听。苦调凄金石，清音入杳冥。",
        "popularity": 870,
        "tags": [
          "神话",
          "音乐"
        ]
      }
    ]
  },
  {
    "id": "司空曙",
    "group": 7,
    "val": 69,
    "color": "#ef4444",
    "desc": "'大历十才子'之一，擅长五律。",
    "birth": 720,
    "death": 790,
    "works": [
      {
        "title": "喜外弟卢纶见宿",
        "type": "五言律诗",
        "content": "静夜四无邻，荒居旧业贫。雨中黄叶树，灯下白头人。",
        "popularity": 880,
        "tags": [
          "亲情",
          "凄凉"
        ]
      }
    ]
  },
  {
    "id": "刘长卿",
    "group": 6,
    "val": 76,
    "color": "#fb923c",
    "desc": "字文房，中唐诗人，自称'五言长城'。",
    "birth": 709,
    "death": 785,
    "works": [
      {
        "title": "逢雪宿芙蓉山主人",
        "type": "五言绝句",
        "content": "日暮苍山远，天寒白屋贫。柴门闻犬吠，风雪夜归人。",
        "popularity": 940,
        "tags": [
          "雪夜",
          "羁旅"
        ]
      }
    ]
  },
  {
    "id": "韦庄",
    "group": 5,
    "val": 80,
    "color": "#f472b6",
    "desc": "字端己，晚唐诗人、词人，花间派代表人物。",
    "birth": 836,
    "death": 910,
    "works": [
      {
        "title": "菩萨蛮·人人尽说江南好",
        "type": "词",
        "content": "人人尽说江南好，游人只合江南老。春水碧于天，画船听雨眠。",
        "popularity": 910,
        "tags": [
          "江南",
          "怀念"
        ]
      }
    ]
  },
  {
    "id": "温庭筠",
    "group": 5,
    "val": 79,
    "color": "#f472b6",
    "desc": "本名岐，字飞卿，晚唐诗人、词人，花间派鼻祖。",
    "birth": 812,
    "death": 870,
    "works": [
      {
        "title": "商山早行",
        "type": "五言律诗",
        "content": "晨起动征铎，客行悲故乡。鸡声茅店月，人迹板桥霜。",
        "popularity": 900,
        "tags": [
          "羁旅",
          "早行"
        ]
      }
    ]
  },
  {
    "id": "许浑",
    "group": 5,
    "val": 71,
    "color": "#f472b6",
    "desc": "字用晦，晚唐诗人，以山水田园诗著称。",
    "birth": 791,
    "death": 858,
    "works": [
      {
        "title": "咸阳城东楼",
        "type": "七言律诗",
        "content": "一上高城万里愁，蒹葭杨柳似汀洲。溪云初起日沉阁，山雨欲来风满楼。",
        "popularity": 920,
        "tags": [
          "怀古",
          "名句"
        ]
      }
    ]
  },
  {
    "id": "张籍",
    "group": 3,
    "val": 74,
    "color": "#a78bfa",
    "desc": "字文昌，中唐诗人，新乐府运动参与者。",
    "birth": 766,
    "death": 830,
    "works": [
      {
        "title": "秋思",
        "type": "七言绝句",
        "content": "洛阳城里见秋风，欲作家书意万重。复恐匆匆说不尽，行人临发又开封。",
        "popularity": 920,
        "tags": [
          "思乡",
          "秋风"
        ]
      }
    ]
  },
  {
    "id": "王建",
    "group": 3,
    "val": 73,
    "color": "#a78bfa",
    "desc": "字仲初，中唐诗人，以宫词著称。",
    "birth": 766,
    "death": 830,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "皇甫冉",
    "group": 6,
    "val": 68,
    "color": "#fb923c",
    "desc": "字茂政，中唐诗人。",
    "birth": 718,
    "death": 767,
    "works": [
      {
        "title": "春思",
        "type": "五言律诗",
        "content": "莺啼燕语报新年，马邑龙堆路几千。家住层城临汉苑，心随明月到胡天。",
        "popularity": 840,
        "tags": [
          "思念",
          "边塞"
        ]
      }
    ]
  },
  {
    "id": "戴叔伦",
    "group": 6,
    "val": 70,
    "color": "#fb923c",
    "desc": "字幼公，中唐诗人。",
    "birth": 732,
    "death": 789,
    "works": [
      {
        "title": "苏溪亭",
        "type": "七言绝句",
        "content": "苏溪亭上草漫漫，谁倚东风十二阑。燕子不归春事晚，一汀烟雨杏花寒。",
        "popularity": 860,
        "tags": [
          "写景",
          "惆怅"
        ]
      }
    ]
  },
  {
    "id": "刘皂",
    "group": 6,
    "val": 65,
    "color": "#fb923c",
    "desc": "中唐诗人，以《长门怨》闻名。",
    "birth": 750,
    "death": 800,
    "works": [
      {
        "title": "旅次朔方",
        "type": "五言绝句",
        "content": "客舍并州已十霜，归心日夜忆咸阳。无端更渡桑乾水，却望并州是故乡。",
        "popularity": 890,
        "tags": [
          "思乡",
          "复杂情感"
        ]
      }
    ]
  },
  {
    "id": "常建",
    "group": 1,
    "val": 72,
    "color": "#fbbf24",
    "desc": "盛唐山水田园诗人，代表作《题破山寺后禅院》。",
    "birth": 708,
    "death": 765,
    "works": [
      {
        "title": "题破山寺后禅院",
        "type": "五言律诗",
        "content": "清晨入古寺，初日照高林。曲径通幽处，禅房花木深。",
        "popularity": 850,
        "tags": [
          "禅意",
          "清幽"
        ]
      }
    ]
  },
  {
    "id": "丘为",
    "group": 4,
    "val": 67,
    "color": "#34d399",
    "desc": "盛唐山水田园诗人。",
    "birth": 694,
    "death": 789,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "裴迪",
    "group": 4,
    "val": 68,
    "color": "#34d399",
    "desc": "盛唐诗人，王维好友。",
    "birth": 716,
    "death": 760,
    "works": [
      {
        "title": "华子冈",
        "type": "五言绝句",
        "content": "落日松风起，还家草露晞。云光侵履迹，山翠拂人衣。",
        "popularity": 840,
        "tags": [
          "山水",
          "清幽"
        ]
      }
    ]
  },
  {
    "id": "祖咏",
    "group": 1,
    "val": 69,
    "color": "#fbbf24",
    "desc": "盛唐诗人，王维好友。",
    "birth": 699,
    "death": 746,
    "works": [
      {
        "title": "终南望余雪",
        "type": "五言绝句",
        "content": "终南阴岭秀，积雪浮云端。林表明霁色，城中增暮寒。",
        "popularity": 920,
        "tags": [
          "雪景",
          "终南山"
        ]
      }
    ]
  },
  {
    "id": "万楚",
    "group": 1,
    "val": 64,
    "color": "#fbbf24",
    "desc": "盛唐诗人。",
    "birth": 700,
    "death": 750,
    "works": [
      {
        "title": "五日观妓",
        "type": "七言律诗",
        "content": "眉黛夺将萱草色，红裙妒杀石榴花。新歌一曲令人艳，醉舞双眸使客嗟。",
        "popularity": 820,
        "tags": [
          "风情",
          "宴饮"
        ]
      }
    ]
  },
  {
    "id": "金昌绪",
    "group": 1,
    "val": 65,
    "color": "#fbbf24",
    "desc": "盛唐诗人，以《春怨》闻名。",
    "birth": 700,
    "death": 750,
    "works": [
      {
        "title": "春怨",
        "type": "五言绝句",
        "content": "打起黄莺儿，莫教枝上啼。啼时惊妾梦，不得到辽西。",
        "popularity": 910,
        "tags": [
          "闺怨",
          "思念"
        ]
      }
    ]
  },
  {
    "id": "寒山",
    "group": 3,
    "val": 74,
    "color": "#a78bfa",
    "desc": "唐代诗僧，诗作通俗易懂，影响深远。",
    "birth": 690,
    "death": 780,
    "works": [
      {
        "title": "杳杳寒山道",
        "type": "五言古诗",
        "content": "杳杳寒山道，落落冷涧滨。啾啾常有鸟，寂寂更无人。",
        "popularity": 850,
        "tags": [
          "禅意",
          "自然"
        ]
      }
    ]
  },
  {
    "id": "拾得",
    "group": 3,
    "val": 68,
    "color": "#a78bfa",
    "desc": "唐代诗僧，与寒山齐名。",
    "birth": 700,
    "death": 780,
    "works": [
      {
        "title": "无题",
        "type": "五言古诗",
        "content": "无去无来本湛然，不居内外及中间。一颗水晶绝瑕翳，光明透满出人天。",
        "popularity": 820,
        "tags": [
          "禅理",
          "超脱"
        ]
      }
    ]
  },
  {
    "id": "皎然",
    "group": 3,
    "val": 70,
    "color": "#a78bfa",
    "desc": "字清昼，唐代诗僧、诗论家。",
    "birth": 720,
    "death": 800,
    "works": [
      {
        "title": "寻陆鸿渐不遇",
        "type": "五言绝句",
        "content": "移家虽带郭，野径入桑麻。扣门无犬吠，欲问隔邻家。",
        "popularity": 850,
        "tags": [
          "寻访",
          "隐逸"
        ]
      }
    ]
  },
  {
    "id": "灵一",
    "group": 3,
    "val": 65,
    "color": "#a78bfa",
    "desc": "唐代诗僧。",
    "birth": 728,
    "death": 762,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "贯休",
    "group": 3,
    "val": 69,
    "color": "#a78bfa",
    "desc": "字德隐，唐末五代诗僧、画家。",
    "birth": 832,
    "death": 912,
    "works": [
      {
        "title": "献钱尚父",
        "type": "七言律诗",
        "content": "满堂花醉三千客，一剑霜寒十四州。鼓角揭天嘉气满，旌旗照地晴光柔。",
        "popularity": 880,
        "tags": [
          "豪迈",
          "赞美"
        ]
      }
    ]
  },
  {
    "id": "齐己",
    "group": 3,
    "val": 68,
    "color": "#a78bfa",
    "desc": "晚唐五代诗僧。",
    "birth": 863,
    "death": 937,
    "works": [
      {
        "title": "早梅",
        "type": "五言律诗",
        "content": "万木冻欲折，孤根暖独回。前村深雪里，昨夜一枝开。",
        "popularity": 860,
        "tags": [
          "咏物",
          "坚毅"
        ]
      }
    ]
  },
  {
    "id": "鱼玄机",
    "group": 5,
    "val": 75,
    "color": "#f472b6",
    "desc": "字幼微，晚唐女诗人。",
    "birth": 844,
    "death": 871,
    "works": [
      {
        "title": "赠邻女",
        "type": "七言绝句",
        "content": "羞日遮罗袖，愁春懒起妆。易求无价宝，难得有心郎。",
        "popularity": 890,
        "tags": [
          "感怀",
          "爱情"
        ]
      }
    ]
  },
  {
    "id": "李冶",
    "group": 5,
    "val": 72,
    "color": "#f472b6",
    "desc": "字季兰，唐代女诗人。",
    "birth": 730,
    "death": 784,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "薛涛",
    "group": 5,
    "val": 76,
    "color": "#f472b6",
    "desc": "字洪度，唐代女诗人、歌妓。",
    "birth": 768,
    "death": 832,
    "works": [
      {
        "title": "送友人",
        "type": "五言绝句",
        "content": "水国蒹葭夜有霜，月寒山色共苍苍。谁言千里自今夕，离别心中亦有乡。",
        "popularity": 870,
        "tags": [
          "送别",
          "思念"
        ]
      }
    ]
  },
  {
    "id": "刘采春",
    "group": 5,
    "val": 68,
    "color": "#f472b6",
    "desc": "唐代女诗人、歌妓。",
    "birth": 780,
    "death": 830,
    "works": [
      {
        "title": "啰唝曲",
        "type": "五言绝句",
        "content": "不喜秦淮水，生憎江上船。载儿夫婿去，经岁又经年。",
        "popularity": 850,
        "tags": [
          "闺怨",
          "离别"
        ]
      }
    ]
  },
  {
    "id": "杜秋娘",
    "group": 5,
    "val": 70,
    "color": "#f472b6",
    "desc": "唐代女诗人，以《金缕衣》闻名。",
    "birth": 790,
    "death": 850,
    "works": [
      {
        "title": "金缕衣",
        "type": "七言绝句",
        "content": "劝君莫惜金缕衣，劝君惜取少年时。花开堪折直须折，莫待无花空折枝。",
        "popularity": 960,
        "tags": [
          "励志",
          "珍惜时间"
        ]
      }
    ]
  },
  {
    "id": "葛鸦儿",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 800,
    "death": 850,
    "works": [
      {
        "title": "怀良人",
        "type": "五言绝句",
        "content": "蓬鬓荆钗世所稀，良人久戍未回归。愿将此身化明月，照见征人夜捣衣。",
        "popularity": 810,
        "tags": [
          "思念",
          "闺怨"
        ]
      }
    ]
  },
  {
    "id": "张旭",
    "group": 1,
    "val": 77,
    "color": "#fbbf24",
    "desc": "字伯高，唐代书法家、诗人，'草圣'。",
    "birth": 675,
    "death": 750,
    "works": [
      {
        "title": "桃花溪",
        "type": "七言绝句",
        "content": "隐隐飞桥隔野烟，石矶西畔问渔船。桃花尽日随流水，洞在清溪何处边。",
        "popularity": 880,
        "tags": [
          "山水",
          "寻幽"
        ]
      }
    ]
  },
  {
    "id": "贺朝",
    "group": 4,
    "val": 66,
    "color": "#34d399",
    "desc": "'吴中四士'之一。",
    "birth": 680,
    "death": 740,
    "works": [
      {
        "title": "赠酒店胡姬",
        "type": "七言绝句",
        "content": "胡姬貌如花，当垆笑春风。笑春风，舞罗衣，君今不醉将安归。",
        "popularity": 810,
        "tags": [
          "风情",
          "宴饮"
        ]
      }
    ]
  },
  {
    "id": "包佶",
    "group": 6,
    "val": 67,
    "color": "#fb923c",
    "desc": "字幼正，中唐诗人。",
    "birth": 720,
    "death": 792,
    "works": [
      {
        "title": "送人归京",
        "type": "五言律诗",
        "content": "离心何以赠，自有玉壶冰。勤苦为文久，归来见友曾。",
        "popularity": 780,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "李频",
    "group": 5,
    "val": 69,
    "color": "#f472b6",
    "desc": "字德新，晚唐诗人。",
    "birth": 818,
    "death": 876,
    "works": [
      {
        "title": "渡桑乾",
        "type": "五言绝句",
        "content": "客舍并州已十霜，归心日夜忆咸阳。无端更渡桑乾水，却望并州是故乡。",
        "popularity": 910,
        "tags": [
          "思乡",
          "复杂情感"
        ]
      }
    ]
  },
  {
    "id": "郑谷",
    "group": 5,
    "val": 71,
    "color": "#f472b6",
    "desc": "字守愚，晚唐诗人。",
    "birth": 851,
    "death": 910,
    "works": [
      {
        "title": "鹧鸪",
        "type": "七言律诗",
        "content": "暖戏烟芜锦翼齐，品流应得近鸾鹥。座中亦有江南客，莫向春风得意啼。",
        "popularity": 850,
        "tags": [
          "咏物",
          "乡愁"
        ]
      }
    ]
  },
  {
    "id": "韩偓",
    "group": 5,
    "val": 73,
    "color": "#f472b6",
    "desc": "字致光，晚唐诗人。",
    "birth": 842,
    "death": 923,
    "works": [
      {
        "title": "已凉",
        "type": "七言绝句",
        "content": "碧阑干外绣帘垂，猩色屏风画折枝。八尺龙须方锦褥，已凉天气未寒时。",
        "popularity": 860,
        "tags": [
          "写景",
          "闲适"
        ]
      }
    ]
  },
  {
    "id": "吴融",
    "group": 5,
    "val": 68,
    "color": "#f472b6",
    "desc": "字子华，晚唐诗人。",
    "birth": 850,
    "death": 903,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "崔涂",
    "group": 5,
    "val": 67,
    "color": "#f472b6",
    "desc": "字礼山，晚唐诗人。",
    "birth": 854,
    "death": 920,
    "works": [
      {
        "title": "代表作待考",
        "type": "未知",
        "content": "该诗人的具体代表作内容正在整理中。",
        "popularity": 500,
        "tags": [
          "待整理"
        ]
      }
    ]
  },
  {
    "id": "秦韬玉",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "字仲明，晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "贫女",
        "type": "七言律诗",
        "content": "蓬门未识绮罗香，拟托良媒益自伤。谁爱风流高格调，共怜时世俭梳妆。",
        "popularity": 910,
        "tags": [
          "同情",
          "贫女"
        ]
      }
    ]
  },
  {
    "id": "张蠙",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "字象文，晚唐诗人。",
    "birth": 870,
    "death": 930,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离心何以赠，自有玉壶冰。勤苦为文久，归来见友曾。",
        "popularity": 780,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "杜荀鹤",
    "group": 5,
    "val": 70,
    "color": "#f472b6",
    "desc": "字彦之，晚唐诗人。",
    "birth": 846,
    "death": 904,
    "works": [
      {
        "title": "山中寡妇",
        "type": "七言律诗",
        "content": "夫因兵死守蓬茅，麻苎衣衫鬓发焦。桑柘废来犹纳税，田园荒后尚征苗。",
        "popularity": 860,
        "tags": [
          "同情",
          "战乱"
        ]
      }
    ]
  },
  {
    "id": "聂夷中",
    "group": 5,
    "val": 68,
    "color": "#f472b6",
    "desc": "字坦之，晚唐诗人。",
    "birth": 837,
    "death": 884,
    "works": [
      {
        "title": "咏田家",
        "type": "五言古诗",
        "content": "二月卖新丝，五月粜新谷。医得眼前疮，剜却心头肉。",
        "popularity": 880,
        "tags": [
          "同情",
          "农民"
        ]
      }
    ]
  },
  {
    "id": "谭用之",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 860,
    "death": 920,
    "works": [
      {
        "title": "秋宿湘江",
        "type": "七言律诗",
        "content": "湘江秋水净无泥，一叶扁舟过楚西。日暮乡关何处是，烟波江上使人愁。",
        "popularity": 820,
        "tags": [
          "羁旅",
          "秋思"
        ]
      }
    ]
  },
  {
    "id": "王驾",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "字大用，晚唐诗人。",
    "birth": 851,
    "death": 900,
    "works": [
      {
        "title": "雨晴",
        "type": "七言绝句",
        "content": "雨前初见花间蕊，雨后全无叶底花。蝴蝶飞来过墙去，应疑春色在邻家。",
        "popularity": 880,
        "tags": [
          "写景",
          "春意"
        ]
      }
    ]
  },
  {
    "id": "陈陶",
    "group": 5,
    "val": 67,
    "color": "#f472b6",
    "desc": "字嵩伯，晚唐诗人。",
    "birth": 812,
    "death": 885,
    "works": [
      {
        "title": "陇西行",
        "type": "七言绝句",
        "content": "誓扫匈奴不顾身，五千貂锦丧胡尘。可怜无定河边骨，犹是春闺梦里人。",
        "popularity": 930,
        "tags": [
          "边塞",
          "悲剧"
        ]
      }
    ]
  },
  {
    "id": "马戴",
    "group": 5,
    "val": 68,
    "color": "#f472b6",
    "desc": "字虞臣，晚唐诗人。",
    "birth": 799,
    "death": 869,
    "works": [
      {
        "title": "灞上秋居",
        "type": "五言律诗",
        "content": "灞原风雨定，晚见雁行低。高树晓还密，远山晴更多。",
        "popularity": 840,
        "tags": [
          "秋景",
          "羁旅"
        ]
      }
    ]
  },
  {
    "id": "鲍君徽",
    "group": 5,
    "val": 63,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 780,
    "death": 830,
    "works": [
      {
        "title": "惜花",
        "type": "五言绝句",
        "content": "枝上花开早，林间叶落稀。愿君多爱惜，莫待雨淋漓。",
        "popularity": 770,
        "tags": [
          "惜花",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "刘叉",
    "group": 6,
    "val": 67,
    "color": "#fb923c",
    "desc": "中唐诗人，韩愈门客。",
    "birth": 780,
    "death": 830,
    "works": [
      {
        "title": "自问",
        "type": "七言绝句",
        "content": "幸依宽政得优游，莫向平人说苦愁。纵使有才无处用，也须随分度春秋。",
        "popularity": 820,
        "tags": [
          "自嘲",
          "处世"
        ]
      }
    ]
  },
  {
    "id": "卢仝",
    "group": 6,
    "val": 70,
    "color": "#fb923c",
    "desc": "号玉川子，中唐诗人，以《月蚀诗》闻名。",
    "birth": 775,
    "death": 835,
    "works": [
      {
        "title": "走笔谢孟谏议寄新茶",
        "type": "七言歌行",
        "content": "一碗喉吻润，二碗破孤闷。三碗搜枯肠，唯有文字五千卷。",
        "popularity": 900,
        "tags": [
          "茶文化",
          "豪爽"
        ]
      }
    ]
  },
  {
    "id": "施肩吾",
    "group": 6,
    "val": 67,
    "color": "#fb923c",
    "desc": "字希圣，中唐诗人。",
    "birth": 780,
    "death": 861,
    "works": [
      {
        "title": "幼女词",
        "type": "七言绝句",
        "content": "幼女才六岁，未知巧与拙。向夜在堂前，学人拜新月。",
        "popularity": 860,
        "tags": [
          "童趣",
          "生活"
        ]
      }
    ]
  },
  {
    "id": "元结",
    "group": 6,
    "val": 72,
    "color": "#fb923c",
    "desc": "字次山，中唐诗人、文学家。",
    "birth": 719,
    "death": 772,
    "works": [
      {
        "title": "贼退示官吏",
        "type": "五言古诗",
        "content": "昔年逢太平，山林二十年。泉源在庭户，洞壑当门前。",
        "popularity": 840,
        "tags": [
          "社会",
          "感怀"
        ]
      }
    ]
  },
  {
    "id": "顾况",
    "group": 6,
    "val": 71,
    "color": "#fb923c",
    "desc": "字逋翁，中唐诗人。",
    "birth": 727,
    "death": 815,
    "works": [
      {
        "title": "子夜变歌",
        "type": "七言绝句",
        "content": "昨夜裙带解，今朝蟢子飞。铅华不可弃，莫是藁砧归。",
        "popularity": 830,
        "tags": [
          "民歌",
          "期待"
        ]
      }
    ]
  },
  {
    "id": "戎昱",
    "group": 6,
    "val": 68,
    "color": "#fb923c",
    "desc": "中唐诗人。",
    "birth": 744,
    "death": 800,
    "works": [
      {
        "title": "霁雪",
        "type": "五言绝句",
        "content": "风卷寒云暮，雪晴山月孤。空余一片影，独照万年枯。",
        "popularity": 810,
        "tags": [
          "雪景",
          "孤独"
        ]
      }
    ]
  },
  {
    "id": "李端",
    "group": 7,
    "val": 69,
    "color": "#ef4444",
    "desc": "'大历十才子'之一。",
    "birth": 740,
    "death": 785,
    "works": [
      {
        "title": "听筝",
        "type": "五言绝句",
        "content": "鸣筝金粟柱，素手玉房前。欲得周郎顾，时时误拂弦。",
        "popularity": 890,
        "tags": [
          "音乐",
          "情趣"
        ]
      }
    ]
  },
  {
    "id": "卢纶",
    "group": 7,
    "val": 72,
    "color": "#ef4444",
    "desc": "'大历十才子'之一，以边塞诗著称。",
    "birth": 740,
    "death": 799,
    "works": [
      {
        "title": "和张仆射塞下曲·其二",
        "type": "五言绝句",
        "content": "林暗草惊风，将军夜引弓。平明寻白羽，没在石棱中。",
        "popularity": 930,
        "tags": [
          "边塞",
          "英勇"
        ]
      }
    ]
  },
  {
    "id": "苗发",
    "group": 7,
    "val": 64,
    "color": "#ef4444",
    "desc": "'大历十才子'之一。",
    "birth": 740,
    "death": 790,
    "works": [
      {
        "title": "送司空曙",
        "type": "五言律诗",
        "content": "离心何以赠，自有玉壶冰。勤苦为文久，归来见友曾。",
        "popularity": 800,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "崔峒",
    "group": 7,
    "val": 65,
    "color": "#ef4444",
    "desc": "'大历十才子'之一。",
    "birth": 740,
    "death": 790,
    "works": [
      {
        "title": "送人还湖南",
        "type": "五言律诗",
        "content": "洞庭秋水阔，湘雁夜飞频。莫道湖南远，归怀已有春。",
        "popularity": 810,
        "tags": [
          "送别",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "耿湋",
    "group": 7,
    "val": 66,
    "color": "#ef4444",
    "desc": "'大历十才子'之一。",
    "birth": 740,
    "death": 790,
    "works": [
      {
        "title": "秋日",
        "type": "五言绝句",
        "content": "返照入闾巷，忧来谁共语。古道少人行，秋风动禾黍。",
        "popularity": 820,
        "tags": [
          "秋思",
          "孤独"
        ]
      }
    ]
  },
  {
    "id": "司空文明",
    "group": 7,
    "val": 67,
    "color": "#ef4444",
    "desc": "'大历十才子'之一。",
    "birth": 740,
    "death": 790,
    "works": [
      {
        "title": "无题",
        "type": "五言绝句",
        "content": "寒云带雨过，孤雁向南飞。莫道归期远，心中已有归。",
        "popularity": 740,
        "tags": [
          "思乡",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "张氏",
    "group": 5,
    "val": 62,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 750,
    "death": 800,
    "works": [
      {
        "title": "寄远",
        "type": "五言绝句",
        "content": "忆君如明月，夜夜减清辉。愿作影随君，君行影亦随。",
        "popularity": 770,
        "tags": [
          "思念",
          "爱情"
        ]
      }
    ]
  },
  {
    "id": "钟陵寒",
    "group": 5,
    "val": 61,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 760,
    "death": 810,
    "works": [
      {
        "title": "无题",
        "type": "五言绝句",
        "content": "寒云带雨过，孤雁向南飞。莫道归期远，心中已有归。",
        "popularity": 750,
        "tags": [
          "思乡",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "张连子",
    "group": 5,
    "val": 60,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 770,
    "death": 820,
    "works": [
      {
        "title": "无题",
        "type": "五言绝句",
        "content": "寒云带雨过，孤雁向南飞。莫道归期远，心中已有归。",
        "popularity": 730,
        "tags": [
          "思乡",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "李季兰",
    "group": 5,
    "val": 71,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 730,
    "death": 784,
    "works": [
      {
        "title": "相思",
        "type": "五言绝句",
        "content": "红豆生南国，春来发几枝。愿君多采撷，此物最相思。",
        "popularity": 850,
        "tags": [
          "相思",
          "爱情"
        ]
      }
    ]
  },
  {
    "id": "田娥",
    "group": 5,
    "val": 62,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 780,
    "death": 830,
    "works": [
      {
        "title": "寄远",
        "type": "五言绝句",
        "content": "忆君如明月，夜夜减清辉。愿作影随君，君行影亦随。",
        "popularity": 790,
        "tags": [
          "思念",
          "爱情"
        ]
      }
    ]
  },
  {
    "id": "刘瑶",
    "group": 5,
    "val": 61,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 790,
    "death": 840,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离心何以赠，自有玉壶冰。勤苦为文久，归来见友曾。",
        "popularity": 750,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "薛莹",
    "group": 5,
    "val": 60,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 800,
    "death": 850,
    "works": [
      {
        "title": "秋日湖上",
        "type": "五言绝句",
        "content": "落日五湖上，烟波正渺茫。谁家有孤艇，独钓满湖霜。",
        "popularity": 790,
        "tags": [
          "秋景",
          "孤独"
        ]
      }
    ]
  },
  {
    "id": "上官婉儿",
    "group": 4,
    "val": 80,
    "color": "#34d399",
    "desc": "唐代女官、诗人，武则天时期重要人物。",
    "birth": 664,
    "death": 710,
    "works": [
      {
        "title": "彩书怨",
        "type": "五言律诗",
        "content": "叶下洞庭初，思君万里余。露浓香被冷，月落晓窗虚。",
        "popularity": 840,
        "tags": [
          "思念",
          "闺怨"
        ]
      }
    ]
  },
  {
    "id": "花蕊夫人",
    "group": 5,
    "val": 70,
    "color": "#f472b6",
    "desc": "五代女诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "述国亡诗",
        "type": "七言绝句",
        "content": "君王城上竖降旗，妾在深宫那得知？十四万人齐解甲，更无一个是男儿！",
        "popularity": 940,
        "tags": [
          "爱国",
          "讽刺"
        ]
      }
    ]
  },
  {
    "id": "程长文",
    "group": 5,
    "val": 62,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 780,
    "death": 830,
    "works": [
      {
        "title": "狱中闻蝉",
        "type": "五言律诗",
        "content": "露重飞难进，风多响易沉。无人信高洁，谁为表予心。",
        "popularity": 830,
        "tags": [
          "感怀",
          "高洁"
        ]
      }
    ]
  },
  {
    "id": "莫宣卿",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "答问",
        "type": "五言绝句",
        "content": "我本山中人，误入尘网里。一朝得归去，依旧是山水。",
        "popularity": 780,
        "tags": [
          "隐逸",
          "自述"
        ]
      }
    ]
  },
  {
    "id": "周朴",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "字太朴，晚唐诗人。",
    "birth": 820,
    "death": 880,
    "works": [
      {
        "title": "春日",
        "type": "七言绝句",
        "content": "雨前初见花间蕊，雨后全无叶底花。蝴蝶飞来过墙去，应疑春色在邻家。",
        "popularity": 820,
        "tags": [
          "写景",
          "春意"
        ]
      }
    ]
  },
  {
    "id": "方干",
    "group": 5,
    "val": 69,
    "color": "#f472b6",
    "desc": "字雄飞，晚唐诗人。",
    "birth": 809,
    "death": 888,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离心何以赠，自有玉壶冰。勤苦为文久，归来见友曾。",
        "popularity": 790,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "高骈",
    "group": 5,
    "val": 68,
    "color": "#f472b6",
    "desc": "字千里，晚唐诗人、将领。",
    "birth": 821,
    "death": 887,
    "works": [
      {
        "title": "山亭夏日",
        "type": "七言绝句",
        "content": "绿树阴浓夏日长，楼台倒影入池塘。水晶帘动微风起，满架蔷薇一院香。",
        "popularity": 910,
        "tags": [
          "夏日",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "来鹄",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "除夜",
        "type": "七言绝句",
        "content": "事关休戚已成空，万里相思一夜中。愁到晓鸡声绝后，又将憔悴见春风。",
        "popularity": 820,
        "tags": [
          "节日",
          "愁思"
        ]
      }
    ]
  },
  {
    "id": "于武陵",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "劝酒",
        "type": "五言绝句",
        "content": "劝君金屈卮，满酌不须辞。花发多风雨，人生足别离。",
        "popularity": 880,
        "tags": [
          "劝酒",
          "人生感悟"
        ]
      }
    ]
  },
  {
    "id": "于濆",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "字子漪，晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "辛苦吟",
        "type": "五言古诗",
        "content": "垄上扶犁儿，手足皆胼胝。皮毛日皲裂，不知为谁滋。",
        "popularity": 840,
        "tags": [
          "同情",
          "劳苦"
        ]
      }
    ]
  },
  {
    "id": "邵谒",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "金谷园",
        "type": "七言绝句",
        "content": "繁华事散逐香尘，流水无情草自春。日暮东风怨啼鸟，落花犹似坠楼人。",
        "popularity": 830,
        "tags": [
          "怀古",
          "变迁"
        ]
      }
    ]
  },
  {
    "id": "曹邺",
    "group": 5,
    "val": 67,
    "color": "#f472b6",
    "desc": "字业之，晚唐诗人。",
    "birth": 816,
    "death": 875,
    "works": [
      {
        "title": "官仓鼠",
        "type": "七言绝句",
        "content": "官仓老鼠大如斗，见人开仓亦不走。健儿无粮百姓饥，谁遣朝朝入君口。",
        "popularity": 870,
        "tags": [
          "讽刺",
          "贪官"
        ]
      }
    ]
  },
  {
    "id": "李山甫",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 830,
    "death": 880,
    "works": [
      {
        "title": "柳",
        "type": "七言绝句",
        "content": "数树新开翠影齐，倚风情态远山低。谁家玉笛吹杨柳，几处金鞭跨马嘶。",
        "popularity": 810,
        "tags": [
          "咏物",
          "柳树"
        ]
      }
    ]
  },
  {
    "id": "胡曾",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "字秋田，晚唐诗人。",
    "birth": 840,
    "death": 900,
    "works": [
      {
        "title": "咏史诗·长城",
        "type": "七言绝句",
        "content": "祖龙得意守咸阳，万里修筑到海傍。不信长城能御寇，至今犹自怨秦皇。",
        "popularity": 840,
        "tags": [
          "怀古",
          "讽刺"
        ]
      }
    ]
  },
  {
    "id": "周昙",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 840,
    "death": 900,
    "works": [
      {
        "title": "咏史诗·秦",
        "type": "七言绝句",
        "content": "祖龙得意守咸阳，万里修筑到海傍。不信长城能御寇，至今犹自怨秦皇。",
        "popularity": 810,
        "tags": [
          "怀古",
          "讽刺"
        ]
      }
    ]
  },
  {
    "id": "孙元晏",
    "group": 5,
    "val": 63,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "咏史诗·晋",
        "type": "七言绝句",
        "content": "繁华事散逐香尘，流水无情草自春。日暮东风怨啼鸟，落花犹似坠楼人。",
        "popularity": 800,
        "tags": [
          "怀古",
          "变迁"
        ]
      }
    ]
  },
  {
    "id": "王周",
    "group": 5,
    "val": 62,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "过旧宅",
        "type": "五言律诗",
        "content": "旧宅荒凉处，秋风动野蒿。昔人何处去，空见月轮高。",
        "popularity": 770,
        "tags": [
          "怀旧",
          "荒凉"
        ]
      }
    ]
  },
  {
    "id": "李中",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "字有中，晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "碧云集",
        "type": "五言律诗",
        "content": "碧云深处路，独往意何如。山色连天远，泉声入耳虚。",
        "popularity": 790,
        "tags": [
          "山水",
          "意境"
        ]
      }
    ]
  },
  {
    "id": "孟宾于",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离别意如何，江边春草多。愿君如此草，岁岁更相过。",
        "popularity": 760,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "沈彬",
    "group": 5,
    "val": 64,
    "color": "#f472b6",
    "desc": "字子文，晚唐诗人。",
    "birth": 850,
    "death": 900,
    "works": [
      {
        "title": "结客少年场行",
        "type": "七言律诗",
        "content": "结客少年场，报恩不用忙。黄金买骏马，白刃杀仇雠。",
        "popularity": 800,
        "tags": [
          "侠义",
          "少年"
        ]
      }
    ]
  },
  {
    "id": "徐夤",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "字昭梦，晚唐诗人。",
    "birth": 850,
    "death": 910,
    "works": [
      {
        "title": "柳",
        "type": "七言绝句",
        "content": "数树新开翠影齐，倚风情态远山低。谁家玉笛吹杨柳，几处金鞭跨马嘶。",
        "popularity": 810,
        "tags": [
          "咏物",
          "柳树"
        ]
      }
    ]
  },
  {
    "id": "黄滔",
    "group": 5,
    "val": 67,
    "color": "#f472b6",
    "desc": "字文江，晚唐诗人。",
    "birth": 840,
    "death": 905,
    "works": [
      {
        "title": "寄远",
        "type": "七言绝句",
        "content": "万里相思一夜中，事关休戚已成空。愁到晓鸡声绝后，又将憔悴见春风。",
        "popularity": 800,
        "tags": [
          "思念",
          "愁绪"
        ]
      }
    ]
  },
  {
    "id": "崔道融",
    "group": 5,
    "val": 65,
    "color": "#f472b6",
    "desc": "晚唐诗人。",
    "birth": 840,
    "death": 900,
    "works": [
      {
        "title": "溪居即事",
        "type": "七言绝句",
        "content": "篱外谁家不系船，春风吹入钓鱼湾。小童疑是有村客，急向柴门去却关。",
        "popularity": 860,
        "tags": [
          "田园",
          "童趣"
        ]
      }
    ]
  },
  {
    "id": "张泌",
    "group": 5,
    "val": 66,
    "color": "#f472b6",
    "desc": "晚唐诗人、词人。",
    "birth": 850,
    "death": 910,
    "works": [
      {
        "title": "寄人",
        "type": "七言绝句",
        "content": "别梦依稀咒逝川，来时衣上泪痕悬。别后不知君远近，触目凄凉多少年。",
        "popularity": 840,
        "tags": [
          "思念",
          "爱情"
        ]
      }
    ]
  },
  {
    "id": "殷娥",
    "group": 5,
    "val": 60,
    "color": "#f472b6",
    "desc": "唐代女诗人。",
    "birth": 800,
    "death": 850,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离别意如何，江边春草多。愿君如此草，岁岁更相过。",
        "popularity": 780,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "孔绍安",
    "group": 4,
    "val": 64,
    "color": "#34d399",
    "desc": "初唐诗人。",
    "birth": 577,
    "death": 627,
    "works": [
      {
        "title": "落叶",
        "type": "五言绝句",
        "content": "早秋惊落叶，飘零似客身。道人应不识，犹是旧时人。",
        "popularity": 830,
        "tags": [
          "感怀",
          "秋天"
        ]
      }
    ]
  },
  {
    "id": "上官仪",
    "group": 4,
    "val": 72,
    "color": "#34d399",
    "desc": "字游韶，初唐诗人、政治家。",
    "birth": 608,
    "death": 665,
    "works": [
      {
        "title": "入朝洛径",
        "type": "五言律诗",
        "content": "脉脉广川流，驱马历长洲。鹊飞山月曙，蝉噪野风秋。",
        "popularity": 830,
        "tags": [
          "写景",
          "宫廷"
        ]
      }
    ]
  },
  {
    "id": "王绩",
    "group": 4,
    "val": 70,
    "color": "#34d399",
    "desc": "字无功，号东皋子，初唐诗人。",
    "birth": 585,
    "death": 644,
    "works": [
      {
        "title": "野望",
        "type": "五言律诗",
        "content": "东皋薄暮望，徙倚欲何依。树树皆秋色，山山唯落晖。",
        "popularity": 890,
        "tags": [
          "田园",
          "隐逸"
        ]
      }
    ]
  },
  {
    "id": "魏徵",
    "group": 4,
    "val": 78,
    "color": "#34d399",
    "desc": "字玄成，初唐政治家、诗人。",
    "birth": 580,
    "death": 643,
    "works": [
      {
        "title": "述怀",
        "type": "五言古诗",
        "content": "中原初逐鹿，投笔事戎轩。纵横计不就，慷慨志犹存。",
        "popularity": 850,
        "tags": [
          "志向",
          "慷慨"
        ]
      }
    ]
  },
  {
    "id": "李峤",
    "group": 4,
    "val": 71,
    "color": "#34d399",
    "desc": "字巨山，初唐诗人。",
    "birth": 644,
    "death": 713,
    "works": [
      {
        "title": "风",
        "type": "五言绝句",
        "content": "解落三秋叶，能开二月花。过江千尺浪，入竹万竿斜。",
        "popularity": 950,
        "tags": [
          "咏物",
          "风"
        ]
      }
    ]
  },
  {
    "id": "苏味道",
    "group": 4,
    "val": 69,
    "color": "#34d399",
    "desc": "初唐诗人。",
    "birth": 648,
    "death": 705,
    "works": [
      {
        "title": "正月十五夜",
        "type": "五言律诗",
        "content": "火树银花合，星桥铁锁开。暗尘随马去，明月逐人来。",
        "popularity": 910,
        "tags": [
          "节日",
          "元宵"
        ]
      }
    ]
  },
  {
    "id": "杜审言",
    "group": 4,
    "val": 73,
    "color": "#34d399",
    "desc": "字必简，初唐诗人，杜甫祖父。",
    "birth": 645,
    "death": 708,
    "works": [
      {
        "title": "和晋陵陆丞早春游望",
        "type": "五言律诗",
        "content": "独有宦游人，偏惊物候新。云霞出海曙，梅柳渡江春。",
        "popularity": 890,
        "tags": [
          "早春",
          "宦游"
        ]
      }
    ]
  },
  {
    "id": "沈佺期",
    "group": 4,
    "val": 74,
    "color": "#34d399",
    "desc": "字云卿，初唐诗人，与宋之问并称'沈宋'。",
    "birth": 656,
    "death": 713,
    "works": [
      {
        "title": "独不见",
        "type": "七言律诗",
        "content": "卢家少妇郁金堂，海燕双栖玳瑁梁。九月寒砧催木叶，十年征戍忆辽阳。",
        "popularity": 880,
        "tags": [
          "闺怨",
          "思念"
        ]
      }
    ]
  },
  {
    "id": "宋之问",
    "group": 4,
    "val": 74,
    "color": "#34d399",
    "desc": "字延清，初唐诗人，与沈佺期并称'沈宋'。",
    "birth": 656,
    "death": 712,
    "works": [
      {
        "title": "渡汉江",
        "type": "五言绝句",
        "content": "岭外音书断，经冬复历春。近乡情更怯，不敢问来人。",
        "popularity": 940,
        "tags": [
          "思乡",
          "复杂情感"
        ]
      }
    ]
  },
  {
    "id": "张说",
    "group": 4,
    "val": 75,
    "color": "#34d399",
    "desc": "字道济，初唐诗人、政治家。",
    "birth": 667,
    "death": 730,
    "works": [
      {
        "title": "送梁六自洞庭山",
        "type": "五言律诗",
        "content": "巴陵一望洞庭秋，日暮孤舟解不收。山色连天远，泉声入耳虚。",
        "popularity": 850,
        "tags": [
          "送别",
          "写景"
        ]
      }
    ]
  },
  {
    "id": "王翰",
    "group": 1,
    "val": 76,
    "color": "#fbbf24",
    "desc": "字子羽，盛唐诗人，以《凉州词》闻名。",
    "birth": 687,
    "death": 726,
    "works": [
      {
        "title": "凉州词",
        "type": "七言绝句",
        "content": "葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？",
        "popularity": 940,
        "tags": [
          "边塞",
          "豪迈"
        ]
      }
    ]
  },
  {
    "id": "万齐融",
    "group": 1,
    "val": 63,
    "color": "#fbbf24",
    "desc": "盛唐诗人。",
    "birth": 700,
    "death": 750,
    "works": [
      {
        "title": "送别",
        "type": "五言绝句",
        "content": "离别意何如，江边春草多。愿君如此草，岁岁更相过。",
        "popularity": 760,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "邢巨",
    "group": 1,
    "val": 62,
    "color": "#fbbf24",
    "desc": "盛唐诗人。",
    "birth": 700,
    "death": 750,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离别意何如，江边春草多。愿君如此草，岁岁更相过。",
        "popularity": 760,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "孙逖",
    "group": 1,
    "val": 68,
    "color": "#fbbf24",
    "desc": "盛唐诗人。",
    "birth": 696,
    "death": 761,
    "works": [
      {
        "title": "宿云门寺阁",
        "type": "五言律诗",
        "content": "阁道连云汉，门前历水洲。鹊飞山月曙，蝉噪野风秋。",
        "popularity": 820,
        "tags": [
          "写景",
          "清幽"
        ]
      }
    ]
  },
  {
    "id": "狄谦",
    "group": 1,
    "val": 61,
    "color": "#fbbf24",
    "desc": "盛唐诗人。",
    "birth": 700,
    "death": 750,
    "works": [
      {
        "title": "赠别",
        "type": "五言绝句",
        "content": "离别意何如，江边春草多。愿君如此草，岁岁更相过。",
        "popularity": 740,
        "tags": [
          "送别",
          "友情"
        ]
      }
    ]
  },
  {
    "id": "汪伦",
    "group": 1,
    "val": 40,
    "color": "#fbbf24",
    "desc": "唐代泾县名士，李白之友。因李白一首《赠汪伦》而名传千古。",
    "locations": ["泾县", "桃花潭"]
  }
],
  links: [
    {
      "source": "李白",
      "target": "杜甫",
      "value": 9,
      "type": "好友",
      "description": "唐代诗坛的双子星，曾同游梁宋，杜甫多次寄诗李白表达思念与倾慕。"
    },
    {
      "source": "白居易",
      "target": "元稹",
      "value": 9,
      "type": "好友",
      "description": "世称'元白'，共同发起新乐府运动，情谊深厚，诗笺往还终身不绝。"
    },
    {
      "source": "王维",
      "target": "孟浩然",
      "value": 7,
      "type": "好友",
      "description": "山水田园派代表，王维曾引荐孟浩然，两人多次郊游，诗风相近。"
    },
    {
      "source": "李商隐",
      "target": "杜牧",
      "value": 8,
      "type": "合称"
    },
    {
      "source": "高适",
      "target": "岑参",
      "value": 8,
      "type": "合称"
    },
    {
      "source": "韩愈",
      "target": "柳宗元",
      "value": 8,
      "type": "好友"
    },
    {
      "source": "白居易",
      "target": "刘禹锡",
      "value": 7,
      "type": "好友"
    },
    {
      "source": "贾岛",
      "target": "孟郊",
      "value": 7,
      "type": "合称"
    },
    {
      "source": "李白",
      "target": "王昌龄",
      "value": 6,
      "type": "赠诗",
      "description": "王昌龄遭贬谪，李白作《闻王昌龄左迁龙标遥有此寄》表达慰藉。"
    },
    {
      "source": "李白",
      "target": "汪伦",
      "value": 5,
      "type": "赠诗",
      "description": "桃花潭水深千尺，不及汪伦送我情。"
    },
    {
      "source": "杜甫",
      "target": "李白",
      "value": 8,
      "type": "赠诗",
      "description": "杜甫对李白极其推崇，存世诗作中有十余首专门寄赠或怀念李白（如《天末怀李白》）。"
    },
    {
      "source": "李白",
      "target": "王维",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "孟浩然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "高适",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "岑参",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "王之涣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "崔颢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "张若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "张九龄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "李益",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "刘皂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "上官婉儿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李白",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "王维",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "孟浩然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "王昌龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "高适",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "岑参",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "王之涣",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "崔颢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "韦应物",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "张若虚",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "贺知章",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "张九龄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "李益",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "万楚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "金昌绪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "苗发",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "崔峒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "耿湋",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "司空文明",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜甫",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李商隐",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "杜牧",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "韩愈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "柳宗元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李贺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "贾岛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "孟郊",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "韩翃",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "钱起",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "司空曙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "刘长卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "韦庄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "温庭筠",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "丘为",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "寒山",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "拾得",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "贯休",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李频",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "聂夷中",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "胡曾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "周昙",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "黄滔",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "崔道融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "白居易",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "王昌龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "高适",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "岑参",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "王之涣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "崔颢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "张若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "张九龄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "李益",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "钱起",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "刘皂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "上官婉儿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王维",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "韩愈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "刘禹锡",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "柳宗元",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "贾岛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "元稹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "李益",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "韦庄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "温庭筠",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "张籍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "王建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "贯休",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "鱼玄机",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "刘采春",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "杜秋娘",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "李频",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "郑谷",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "韩偓",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "吴融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "秦韬玉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "杜荀鹤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "聂夷中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "王驾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "张连子",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "花蕊夫人",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "孙元晏",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "王周",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "李中",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "孟宾于",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "沈彬",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "徐夤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "张泌",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李商隐",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "韩愈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "刘禹锡",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "柳宗元",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "李贺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "贾岛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "元稹",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "李益",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "韦庄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "温庭筠",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "张籍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "王建",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "贯休",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "鱼玄机",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "刘采春",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "李频",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "韩偓",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "杜荀鹤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "聂夷中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "鲍君徽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "刘叉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "卢仝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "钟陵寒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "刘瑶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜牧",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "王昌龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "高适",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "岑参",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "王之涣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "崔颢",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "陈子昂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "张若虚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "张九龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "韩翃",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "钱起",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "司空曙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "皇甫冉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "戴叔伦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "常建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "李峤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "苏味道",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "杜审言",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "沈佺期",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "宋之问",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟浩然",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "高适",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "岑参",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "王之涣",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "崔颢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "孟郊",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "张若虚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "张九龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "李益",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "钱起",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "司空曙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "皇甫冉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "刘皂",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "灵一",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "李冶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "张氏",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "苏味道",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "杜审言",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王昌龄",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "王之涣",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "崔颢",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "张若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "张九龄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "李益",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "刘皂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "钟陵寒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "上官婉儿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "李峤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "沈佺期",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "宋之问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高适",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "王之涣",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "崔颢",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "韦应物",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "孟郊",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "张若虚",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "贺知章",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "张九龄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "李益",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "万楚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "金昌绪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "苗发",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "崔峒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "耿湋",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "司空文明",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "岑参",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘禹锡",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李贺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "贾岛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "孟郊",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "元稹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "韩翃",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "钱起",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "司空曙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘长卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "温庭筠",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "许浑",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "丘为",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "寒山",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "拾得",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "杜秋娘",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "葛鸦儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李频",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "马戴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "刘瑶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "薛莹",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "方干",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "曹邺",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩愈",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "柳宗元",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李贺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "韦应物",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "贾岛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "孟郊",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "元稹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "韩翃",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "钱起",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "司空曙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "刘长卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "韦庄",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "温庭筠",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "丘为",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "寒山",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "拾得",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "贯休",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李频",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "聂夷中",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘禹锡",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "李贺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "韦应物",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "贾岛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "孟郊",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "元稹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "韩翃",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "钱起",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "司空曙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "刘长卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "温庭筠",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "许浑",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "丘为",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "寒山",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "拾得",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "刘采春",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "杜秋娘",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "葛鸦儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "包佶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "陈陶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "马戴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "鲍君徽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "刘叉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "施肩吾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "方干",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "柳宗元",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "贾岛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "孟郊",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "元稹",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "李益",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "许浑",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "张籍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "王建",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "刘皂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "皎然",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "刘采春",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "杜秋娘",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "葛鸦儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "鲍君徽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "刘叉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "卢纶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "方干",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李贺",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "崔颢",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "韦应物",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "杨炯",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "陈子昂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "张若虚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "张九龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "韩翃",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "钱起",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "司空曙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "皇甫冉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "常建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "李峤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "苏味道",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "杜审言",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "沈佺期",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "宋之问",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王之涣",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "韦应物",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "张若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "张九龄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "李益",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "钱起",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "司空曙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "皇甫冉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "裴迪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "灵一",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "李冶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "上官婉儿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "李峤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "沈佺期",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "宋之问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔颢",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "贾岛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "孟郊",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "元稹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "贺知章",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "韩翃",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "张籍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "王建",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "皇甫冉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "刘皂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "常建",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "祖咏",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "万楚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "金昌绪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "灵一",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "刘采春",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "张旭",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦应物",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "元稹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "韩翃",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "司空曙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "刘长卿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "韦庄",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "温庭筠",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "丘为",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "贯休",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李冶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "包佶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李频",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "聂夷中",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李季兰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贾岛",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "元稹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "韩翃",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "钱起",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "司空曙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "许浑",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "皇甫冉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "刘皂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "常建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "丘为",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "裴迪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "寒山",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "拾得",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "刘采春",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "杜秋娘",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "葛鸦儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "鲍君徽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "刘叉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "卢仝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "施肩吾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "苗发",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "崔峒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "耿湋",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "司空文明",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "方干",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孟郊",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "韩翃",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "李益",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "司空曙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "刘长卿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "温庭筠",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "刘皂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "丘为",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "李冶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "包佶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "李季兰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "高骈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元稹",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "王勃",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "杨炯",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "骆宾王",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "陈子昂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "张若虚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "贺知章",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "张九龄",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "张旭",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "贺朝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "上官仪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "王绩",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "魏徵",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "苏味道",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢照邻",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "杨炯",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "骆宾王",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "陈子昂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "张若虚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "贺知章",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "上官仪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "李峤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "苏味道",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "杜审言",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "沈佺期",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "宋之问",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王勃",
      "target": "张说",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "骆宾王",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "陈子昂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "张若虚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "贺知章",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "张九龄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "张旭",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "贺朝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "上官仪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杨炯",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "陈子昂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "张若虚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "贺知章",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "张九龄",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "张旭",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "贺朝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "孔绍安",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "上官仪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "王绩",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "魏徵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "苏味道",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "骆宾王",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "张若虚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "张九龄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "丘为",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "寒山",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "张旭",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "上官婉儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈子昂",
      "target": "孙逖",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "贺知章",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "张九龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "韩翃",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "刘长卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "常建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "丘为",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "祖咏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "万楚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "金昌绪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "寒山",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "拾得",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "上官婉儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "上官仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张若虚",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "张九龄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "韩翃",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "钱起",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "司空曙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "皇甫冉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "戴叔伦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "常建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "上官婉儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "上官仪",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺知章",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "韩翃",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "钱起",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "司空曙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "皇甫冉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "戴叔伦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "常建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "上官婉儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "李峤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "苏味道",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "杜审言",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张九龄",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "李益",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "钱起",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "张籍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "王建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "刘采春",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "鲍君徽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "刘叉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "施肩吾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "田娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "程长文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩翃",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "钱起",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "刘长卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "温庭筠",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "许浑",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "张籍",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "皇甫冉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "刘皂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "常建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "裴迪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "寒山",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "拾得",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "杜秋娘",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "葛鸦儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "刘瑶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "薛莹",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "周朴",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李益",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "司空曙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "张籍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "王建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "裴迪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "祖咏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "万楚",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "金昌绪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "张旭",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "贺朝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "卢仝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "张说",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钱起",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "刘长卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "张籍",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "王建",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "刘皂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "祖咏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "万楚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "金昌绪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "刘采春",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空曙",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "张籍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "王建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "皇甫冉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "戴叔伦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "刘采春",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "鲍君徽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "刘叉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "施肩吾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "田娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "程长文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘长卿",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "温庭筠",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "许浑",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "贯休",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "齐己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "鱼玄机",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "杜秋娘",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "葛鸦儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "李频",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "郑谷",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "韩偓",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "吴融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "聂夷中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韦庄",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "许浑",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "张籍",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "王建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "贯休",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "齐己",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "鱼玄机",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "刘采春",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "杜秋娘",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "李频",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "郑谷",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "韩偓",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "吴融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "崔涂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "秦韬玉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "杜荀鹤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "谭用之",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "王驾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "张连子",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "花蕊夫人",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "胡曾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "周昙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "孙元晏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "王周",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "李中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "孟宾于",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "沈彬",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "徐夤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "黄滔",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "崔道融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "张泌",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "温庭筠",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "张籍",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "王建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "刘皂",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "皎然",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "贯休",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "鱼玄机",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "刘采春",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "李频",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "郑谷",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "韩偓",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "吴融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "秦韬玉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "杜荀鹤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "聂夷中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "王驾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "鲍君徽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "刘叉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "戎昱",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "卢纶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "张氏",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "花蕊夫人",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "孙元晏",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "王周",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "李中",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "孟宾于",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "沈彬",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "徐夤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "张泌",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "许浑",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "王建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "丘为",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "寒山",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "拾得",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "元结",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张籍",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "戴叔伦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "丘为",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "寒山",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "拾得",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "薛涛",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "元结",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王建",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "戴叔伦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "刘皂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "常建",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "祖咏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "万楚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "金昌绪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "钟陵寒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皇甫冉",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "刘皂",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "常建",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "裴迪",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "祖咏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "万楚",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "金昌绪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "刘采春",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "张旭",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "贺朝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "鲍君徽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "刘叉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "施肩吾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "田娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "程长文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戴叔伦",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "常建",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "丘为",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "裴迪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "寒山",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "拾得",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "薛涛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "刘采春",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "杜秋娘",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "鲍君徽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "刘叉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "张连子",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "刘瑶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘皂",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "丘为",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "贺朝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "钟陵寒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "李峤",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "沈佺期",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "张说",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "常建",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "裴迪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "祖咏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "薛涛",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "刘采春",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "鲍君徽",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "刘叉",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "施肩吾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "田娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "程长文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "苏味道",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "杜审言",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "丘为",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "祖咏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "万楚",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "金昌绪",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "裴迪",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "万楚",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "皎然",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "灵一",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "李冶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "卢纶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "苗发",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "崔峒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "耿湋",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "司空文明",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "苏味道",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "祖咏",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "金昌绪",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "灵一",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "李冶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "戎昱",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "苏味道",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万楚",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "寒山",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "皎然",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "灵一",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "李冶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "戎昱",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "苏味道",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "金昌绪",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "拾得",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "卢仝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "上官婉儿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "李峤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "苏味道",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "杜审言",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "沈佺期",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "宋之问",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "寒山",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "皎然",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "张旭",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "卢仝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "上官婉儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "李峤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "苏味道",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "杜审言",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "沈佺期",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "宋之问",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "拾得",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "灵一",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "李冶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "薛涛",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "刘采春",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "杜秋娘",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "张旭",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "贺朝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "鲍君徽",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "刘叉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "张连子",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "刘瑶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "皎然",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "李冶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "张旭",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "贺朝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "李端",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "灵一",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "齐己",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "鱼玄机",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "杜秋娘",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "葛鸦儿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "李频",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "郑谷",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "韩偓",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "吴融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "聂夷中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "刘瑶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贯休",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "鱼玄机",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "郑谷",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "韩偓",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "吴融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "秦韬玉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "聂夷中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "王驾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "陈陶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "马戴",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "花蕊夫人",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "胡曾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "周昙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "崔道融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "齐己",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "杜秋娘",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "葛鸦儿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "李频",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "郑谷",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "韩偓",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "吴融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "崔涂",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "秦韬玉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "杜荀鹤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "聂夷中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "谭用之",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "王驾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "陈陶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "马戴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "薛莹",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "花蕊夫人",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "胡曾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "周昙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "孙元晏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "王周",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "李中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "孟宾于",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "沈彬",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "徐夤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "黄滔",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "崔道融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "张泌",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鱼玄机",
      "target": "殷娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "薛涛",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "张旭",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "贺朝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "包佶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "卢仝",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李冶",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "刘采春",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "陈陶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "戎昱",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "苗发",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "崔峒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "耿湋",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "司空文明",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "高骈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛涛",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "杜秋娘",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "葛鸦儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "包佶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "李频",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘采春",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "葛鸦儿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "李频",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "韩偓",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "聂夷中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "鲍君徽",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "戎昱",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "卢纶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "张氏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "张连子",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜秋娘",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "李频",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "韩偓",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "聂夷中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "鲍君徽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "刘叉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "卢仝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "葛鸦儿",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "贺朝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "包佶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "元结",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "顾况",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "戎昱",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "上官婉儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "李峤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "苏味道",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "杜审言",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张旭",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "包佶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "元结",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "上官婉儿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "李峤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "苏味道",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "杜审言",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "沈佺期",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "宋之问",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "万齐融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "贺朝",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "元结",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "包佶",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "郑谷",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "韩偓",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "吴融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "崔涂",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "秦韬玉",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "张蠙",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "杜荀鹤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "谭用之",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "王驾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "卢仝",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "花蕊夫人",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "胡曾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "周昙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "孙元晏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "王周",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "李中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "孟宾于",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "沈彬",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "徐夤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "黄滔",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "崔道融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "张泌",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李频",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "韩偓",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "吴融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "郑谷",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "吴融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "聂夷中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "马戴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "薛莹",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "韩偓",
      "target": "殷娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "崔涂",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "张蠙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "吴融",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "秦韬玉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "张蠙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "施肩吾",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔涂",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "张蠙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "杜荀鹤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "秦韬玉",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "杜荀鹤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "聂夷中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "王驾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "陈陶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "花蕊夫人",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "方干",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "高骈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "曹邺",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "胡曾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "周昙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "黄滔",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "崔道融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张蠙",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "聂夷中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "谭用之",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "马戴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜荀鹤",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "谭用之",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "王驾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "陈陶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "马戴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "施肩吾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "花蕊夫人",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "聂夷中",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "王驾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "陈陶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "马戴",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "谭用之",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "陈陶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "马戴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "施肩吾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "花蕊夫人",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王驾",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "马戴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "鲍君徽",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "刘叉",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "卢仝",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "张连子",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "花蕊夫人",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "莫宣卿",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "陈陶",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "鲍君徽",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "刘叉",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "卢仝",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "顾况",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "花蕊夫人",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "胡曾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "周昙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "孙元晏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "王周",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "李中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "孟宾于",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "沈彬",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "徐夤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "黄滔",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "崔道融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "张泌",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "马戴",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "刘叉",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "鲍君徽",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "卢仝",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘叉",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "施肩吾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "李端",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "卢纶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "李季兰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "莫宣卿",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "高骈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "来鹄",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "于武陵",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "于濆",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "邵谒",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "李山甫",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢仝",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "顾况",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "李端",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "卢纶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "苗发",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "崔峒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "耿湋",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "司空文明",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "花蕊夫人",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "胡曾",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "周昙",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "孙元晏",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "王周",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "李中",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "孟宾于",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "沈彬",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "徐夤",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "黄滔",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "崔道融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "张泌",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "施肩吾",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "顾况",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "戎昱",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "李端",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "卢纶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "苗发",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "崔峒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "耿湋",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "司空文明",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "张氏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "钟陵寒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "张说",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "王翰",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "元结",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "戎昱",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "方干",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "顾况",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "李端",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "张连子",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "刘瑶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "万齐融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "邢巨",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "戎昱",
      "target": "狄谦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "卢纶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "张氏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "钟陵寒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "张连子",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "田娥",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "程长文",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李端",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "苗发",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "刘瑶",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "卢纶",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "崔峒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "苗发",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "耿湋",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "崔峒",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "司空文明",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "耿湋",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "张氏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "钟陵寒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "张连子",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "李季兰",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "田娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "程长文",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "孙逖",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "司空文明",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "钟陵寒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "张连子",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "李季兰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "田娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "刘瑶",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "程长文",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张氏",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "张连子",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "李季兰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "田娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "刘瑶",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "薛莹",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "钟陵寒",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "李季兰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "田娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "刘瑶",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "薛莹",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "方干",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张连子",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李季兰",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李季兰",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李季兰",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李季兰",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "刘瑶",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "薛莹",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "田娥",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "薛莹",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "程长文",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "莫宣卿",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "周朴",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "高骈",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "来鹄",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "于武陵",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "于濆",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "邵谒",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "李山甫",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "刘瑶",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "程长文",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "莫宣卿",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "高骈",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "来鹄",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "于武陵",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "于濆",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "邵谒",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "曹邺",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "李山甫",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "胡曾",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "周昙",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "黄滔",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "崔道融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "薛莹",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "李峤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "上官婉儿",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "莫宣卿",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "周朴",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "方干",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "高骈",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "来鹄",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "于武陵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "于濆",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "邵谒",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "曹邺",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "李山甫",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "花蕊夫人",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "程长文",
      "target": "周朴",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "程长文",
      "target": "方干",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "程长文",
      "target": "高骈",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "程长文",
      "target": "曹邺",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "程长文",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "周朴",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "莫宣卿",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "方干",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "周朴",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "高骈",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "方干",
      "target": "殷娥",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "来鹄",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "高骈",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "于武陵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "来鹄",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "于濆",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于武陵",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "邵谒",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "于濆",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "曹邺",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "邵谒",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "李山甫",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "胡曾",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "周昙",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "孙元晏",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "王周",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "李中",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "孟宾于",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "沈彬",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "徐夤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "黄滔",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "崔道融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "张泌",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "曹邺",
      "target": "殷娥",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "胡曾",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "孙元晏",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "王周",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "李中",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "孟宾于",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "沈彬",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "徐夤",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "张泌",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "李山甫",
      "target": "殷娥",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "周昙",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "胡曾",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "孙元晏",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "周昙",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "王周",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙元晏",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "李中",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "王周",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "孟宾于",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李中",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟宾于",
      "target": "沈彬",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟宾于",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟宾于",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟宾于",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孟宾于",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈彬",
      "target": "徐夤",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈彬",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈彬",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈彬",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐夤",
      "target": "黄滔",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐夤",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "徐夤",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄滔",
      "target": "崔道融",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄滔",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "黄滔",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "崔道融",
      "target": "张泌",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "崔道融",
      "target": "殷娥",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孔绍安",
      "target": "上官仪",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "孔绍安",
      "target": "王绩",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孔绍安",
      "target": "魏徵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "王绩",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "魏徵",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "李峤",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "苏味道",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "杜审言",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "沈佺期",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "上官仪",
      "target": "宋之问",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "王绩",
      "target": "魏徵",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "苏味道",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "李峤",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "杜审言",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "张说",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "王翰",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "万齐融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "邢巨",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "孙逖",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "苏味道",
      "target": "狄谦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "沈佺期",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "万齐融",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "邢巨",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "杜审言",
      "target": "狄谦",
      "value": 1,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "宋之问",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "沈佺期",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "张说",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "王翰",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "万齐融",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "邢巨",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "孙逖",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "宋之问",
      "target": "狄谦",
      "value": 2,
      "type": "同时代"
    },
    {
      "source": "张说",
      "target": "王翰",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张说",
      "target": "万齐融",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张说",
      "target": "邢巨",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张说",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "张说",
      "target": "狄谦",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王翰",
      "target": "万齐融",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王翰",
      "target": "邢巨",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "王翰",
      "target": "孙逖",
      "value": 4,
      "type": "同时代"
    },
    {
      "source": "王翰",
      "target": "狄谦",
      "value": 3,
      "type": "同时代"
    },
    {
      "source": "万齐融",
      "target": "邢巨",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万齐融",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "万齐融",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邢巨",
      "target": "孙逖",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "邢巨",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    },
    {
      "source": "孙逖",
      "target": "狄谦",
      "value": 5,
      "type": "同时代"
    }
  ]};
