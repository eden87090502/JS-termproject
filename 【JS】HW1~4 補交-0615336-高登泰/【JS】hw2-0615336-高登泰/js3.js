document.writeln(`
    <h1>Magic Game(Javascript version) </h1>
    <p>心中默想一個 1 到 63間的任一個數,
    不要讓我知道...但是要告訴我在以下哪幾張卡片中
    我可以很快找出來哦
    </p> <input type="button" value="答案"></input>
    `
);

//第一個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 1 張卡片
    <input type = "checkbox">
    </td><tr>
`)
for(let a=1 ;a<=64;a=a+2){
    document.write('<td>' + a + '</td>');
    if((a==15) || (a==31) || (a==47) ||(a==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');

// document.write('<br>');

//第二個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 2 張卡片
    <input type = "checkbox">
    </td><tr>
`)
let list_b=[];
let number=0;
for(let b=0 ;b<32;b++){
    if(b %2 ==0){ 
        number = (b*2) + 2;
        list_b.push(number);
    }else {
        number = (b*2) + 1;
        list_b.push(number);
    }
}    

for(let i =0;i<list_b.length;i++){
    document.write('<td>' + list_b[i] + '</td>');
    if((list_b[i]==15) || (list_b[i]==31) || (list_b[i]==47) ||(list_b[i]==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');

// document.write('<br>');

//第三個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 3 張卡片
    <input type = "checkbox">
    </td><tr>
`)
let list_c=[];
let number_c=0;
let counter_c =0;
for(let c=0 ;c<32;c++){
    if(c %4 ==0){ 
        number_c = (c*2) + 4;
        counter_c +=1;
        list_c.push(number_c);
    }else {
        number_c = c + (4*counter_c);
        list_c.push(number_c);
    }
}    

for(i =0;i<list_c.length;i++){
    document.write('<td>' + list_c[i] + '</td>');
    if((list_c[i]==15) || (list_c[i]==31) || (list_c[i]==47) ||(list_c[i]==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');

// document.write('<br>');

//第四個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 4 張卡片
    <input type = "checkbox">
    </td><tr>
`)
let list_d=[];
let number_d=0;
let counter_d =0;
for(let d=0 ;d<32;d++){
    if(d %8 ==0){ 
        counter_d +=1;
    }
    number_d = d +(counter_d *8);
    list_d.push(number_d);
}    

for(i =0;i<list_d.length;i++){
    document.write('<td>' + list_d[i] + '</td>');
    if((list_d[i]==15) || (list_d[i]==31) || (list_d[i]==47) ||(list_d[i]==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');

// document.write('<br>');

//第五個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 5 張卡片
    <input type = "checkbox">
    </td><tr>
`)
let list_e=[];
let number_e=0;
let counter_e =0;
for(let e=0 ;e<32;e++){
    if(e <16){ 
        number_e = e +16;
        list_e.push(number_e);
    }else {
        number_e = e +32 ;
        list_e.push(number_e);
    }
}    

for(i =0;i<list_e.length;i++){
    document.write('<td>' + list_e[i] + '</td>');
    if((list_e[i]==23) || (list_e[i]==31) || (list_e[i]==55) ||(list_e[i]==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');

// document.write('<br>');

//第六個表格
document.write('<table>');  
document.writeln(`
    <tr><td class="str" colspan="8"> 第 6 張卡片
    <input type = "checkbox">
    </td><tr>
`)
let list_f=[];
for(let f=32 ;f<64;f++){
    list_f.push(f);
}    

for(i =0;i<list_f.length;i++){
    document.write('<td>' + list_f[i] + '</td>');
    if((list_f[i]==39) || (list_f[i]==47) || (list_f[i]==55) ||(list_f[i]==63)) {
        document.write('<tr>'+'</tr>');
    }
}
document.write('</table>');




