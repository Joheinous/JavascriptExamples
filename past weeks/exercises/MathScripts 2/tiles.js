var length, width, tiles, boxes, area;

length = 10;
width = 15;


area = length*width;

tiles=area*1.1;

boxes=(tiles/12);

console.log(Math.ceil(boxes));