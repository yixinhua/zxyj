SET NAMES UTF8;
DROP DATABASE IF EXISTS zx;
CREATE DATABASE zx CHARSET=UTF8;
use zx;
CREATE TABLE zx_pro1(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pid INT,
    img_url VARCHAR(255),
    title VARCHAR(255),
    price DECIMAL(8,2)
);
INSERT INTO zx_pro1 VALUES
(null,1,"http://127.0.0.1:3000/img/middle1-1.jpg","花语系列项链",2150),
(null,2,"http://127.0.0.1:3000/img/middle1-2.jpg","花语系列耳环",1450),
(null,3,"http://127.0.0.1:3000/img/middle1-3.jpg","花语系列",950),
(null,4,"http://127.0.0.1:3000/img/middle1-4.jpg","典雅系列仿珍珠项链",1450),
(null,5,"http://127.0.0.1:3000/img/middle1-5.jpg","华丽系列仿珍珠项链",767),
(null,6,"http://127.0.0.1:3000/img/middle1-6.jpg","时尚优雅仿水晶女士耳坠",575);


CREATE TABLE zx_prolist(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title VARCHAR(128),
    subtitle VARCHAR(128),
    price DECIMAL(10,2),
    keywords VARCHAR(255),
    details VARCHAR(255)
);
INSERT INTO zx_prolist VALUES
(null,"http://127.0.0.1:3000/img/home/found1.jpg","0号黑糖大姨妈纯手工古法红糖月子驱寒暖宫姜茶零号老姜汤","驱寒、大姨妈必备",56.00,"低糖","多种营养元素"),
(null,"http://127.0.0.1:3000/img/home/found2.jpg","贵州茅台酒53度  酱香型500ml","正品保证 支持验货",4288.00,"饮后留香","持久不散"),
(null,"http://127.0.0.1:3000/img/home/found3.jpg","膳魔师真空保温杯 500ml","24小时控温 ",185.00,"冬天保温","夏天保冷"),
(null,"http://127.0.0.1:3000/img/home/found4.jpg","ReFa双球滚轮瘦脸美容仪","深度捏揉紧致肌肤",999.00,"美容美发","微电流"),
(null,"http://127.0.0.1:3000/img/home/found5.jpg","GUESS时尚印花牛仔背包","时尚牛仔色 防泼水",1598.00,"经典标志组合","自然牛仔肌理"),
(null,"http://127.0.0.1:3000/img/home/found6.jpg","美的LED台灯化妆镜","美观实用 镜享生活",199.00,"创意礼品","化妆补光"),
(null,"http://127.0.0.1:3000/img/home/found7.jpg","华为P20 Pro 全面屏徕卡手机","眼界大开",4488.00,"三摄像游戏手机","双卡双待"),
(null,"http://127.0.0.1:3000/img/home/found8.jpg","美旅 DX2拉杆箱","便捷拉杆箱",352.00,"时尚设计","轻享差旅"),
(null,"http://127.0.0.1:3000/img/home/found9.jpg","记忆棉护腰靠垫","美国睡眠科学大美人专利",299.00,"缓解背部疲劳","撑腰护脊"),
(null,"http://127.0.0.1:3000/img/home/found10.jpg","Beats Solo3 Wireless蓝牙耳机 ","电池使用长达40小时",1830.00,"出色音效","充电五分钟播放三小时");