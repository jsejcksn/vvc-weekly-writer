// Virtual Village Classroom - Weekly Writer

// Variables ----------

var btnGrade = document.getElementById('btn-grade');
var btnWeek = document.getElementById('btn-week');
var content = document.getElementById('content-iframe');
var gradeVisible = false;
var navGrade = document.getElementById('nav-grade');
var navWeek = document.getElementById('nav-week');
var weekVisible = false;


var btnGrade0 = document.getElementById('grade-0');
var btnGrade1 = document.getElementById('grade-1');
var btnGrade2 = document.getElementById('grade-2');
var btnGrade3 = document.getElementById('grade-3');
var btnGrade4 = document.getElementById('grade-4');
var btnGrade5 = document.getElementById('grade-5');
var btnGrade6 = document.getElementById('grade-6');
var btnGrade7 = document.getElementById('grade-7');
var btnGrade8 = document.getElementById('grade-8');

var btnWeek001 = document.getElementById('week-0-01');
var btnWeek002 = document.getElementById('week-0-02');
var btnWeek003 = document.getElementById('week-0-03');
var btnWeek004 = document.getElementById('week-0-04');
var btnWeek005 = document.getElementById('week-0-05');
var btnWeek006 = document.getElementById('week-0-06');
var btnWeek007 = document.getElementById('week-0-07');
var btnWeek008 = document.getElementById('week-0-08');
var btnWeek009 = document.getElementById('week-0-09');
var btnWeek010 = document.getElementById('week-0-10');
var btnWeek011 = document.getElementById('week-0-11');
var btnWeek012 = document.getElementById('week-0-12');
var btnWeek013 = document.getElementById('week-0-13');
var btnWeek014 = document.getElementById('week-0-14');
var btnWeek015 = document.getElementById('week-0-15');
var btnWeek016 = document.getElementById('week-0-16');
var btnWeek017 = document.getElementById('week-0-17');
var btnWeek018 = document.getElementById('week-0-18');
var btnWeek019 = document.getElementById('week-0-19');
var btnWeek020 = document.getElementById('week-0-20');
var btnWeek021 = document.getElementById('week-0-21');
var btnWeek022 = document.getElementById('week-0-22');
var btnWeek023 = document.getElementById('week-0-23');
var btnWeek024 = document.getElementById('week-0-24');
var btnWeek025 = document.getElementById('week-0-25');
var btnWeek026 = document.getElementById('week-0-26');
var btnWeek027 = document.getElementById('week-0-27');
var btnWeek028 = document.getElementById('week-0-28');
var btnWeek029 = document.getElementById('week-0-29');
var btnWeek030 = document.getElementById('week-0-30');
var btnWeek031 = document.getElementById('week-0-31');
var btnWeek032 = document.getElementById('week-0-32');
var btnWeek033 = document.getElementById('week-0-33');
var btnWeek034 = document.getElementById('week-0-34');
var btnWeek035 = document.getElementById('week-0-35');
var btnWeek036 = document.getElementById('week-0-36');

var btnWeek101 = document.getElementById('week-1-01');
var btnWeek102 = document.getElementById('week-1-02');
var btnWeek103 = document.getElementById('week-1-03');
var btnWeek104 = document.getElementById('week-1-04');
var btnWeek105 = document.getElementById('week-1-05');
var btnWeek106 = document.getElementById('week-1-06');
var btnWeek107 = document.getElementById('week-1-07');
var btnWeek108 = document.getElementById('week-1-08');
var btnWeek109 = document.getElementById('week-1-09');
var btnWeek110 = document.getElementById('week-1-10');
var btnWeek111 = document.getElementById('week-1-11');
var btnWeek112 = document.getElementById('week-1-12');
var btnWeek113 = document.getElementById('week-1-13');
var btnWeek114 = document.getElementById('week-1-14');
var btnWeek115 = document.getElementById('week-1-15');
var btnWeek116 = document.getElementById('week-1-16');
var btnWeek117 = document.getElementById('week-1-17');
var btnWeek118 = document.getElementById('week-1-18');
var btnWeek119 = document.getElementById('week-1-19');
var btnWeek120 = document.getElementById('week-1-20');
var btnWeek121 = document.getElementById('week-1-21');
var btnWeek122 = document.getElementById('week-1-22');
var btnWeek123 = document.getElementById('week-1-23');
var btnWeek124 = document.getElementById('week-1-24');
var btnWeek125 = document.getElementById('week-1-25');
var btnWeek126 = document.getElementById('week-1-26');
var btnWeek127 = document.getElementById('week-1-27');
var btnWeek128 = document.getElementById('week-1-28');
var btnWeek129 = document.getElementById('week-1-29');
var btnWeek130 = document.getElementById('week-1-30');
var btnWeek131 = document.getElementById('week-1-31');
var btnWeek132 = document.getElementById('week-1-32');
var btnWeek133 = document.getElementById('week-1-33');
var btnWeek134 = document.getElementById('week-1-34');
var btnWeek135 = document.getElementById('week-1-35');
var btnWeek136 = document.getElementById('week-1-36');

var btnWeek201 = document.getElementById('week-2-01');
var btnWeek202 = document.getElementById('week-2-02');
var btnWeek203 = document.getElementById('week-2-03');
var btnWeek204 = document.getElementById('week-2-04');
var btnWeek205 = document.getElementById('week-2-05');
var btnWeek206 = document.getElementById('week-2-06');
var btnWeek207 = document.getElementById('week-2-07');
var btnWeek208 = document.getElementById('week-2-08');
var btnWeek209 = document.getElementById('week-2-09');
var btnWeek210 = document.getElementById('week-2-10');
var btnWeek211 = document.getElementById('week-2-11');
var btnWeek212 = document.getElementById('week-2-12');
var btnWeek213 = document.getElementById('week-2-13');
var btnWeek214 = document.getElementById('week-2-14');
var btnWeek215 = document.getElementById('week-2-15');
var btnWeek216 = document.getElementById('week-2-16');
var btnWeek217 = document.getElementById('week-2-17');
var btnWeek218 = document.getElementById('week-2-18');
var btnWeek219 = document.getElementById('week-2-19');
var btnWeek220 = document.getElementById('week-2-20');
var btnWeek221 = document.getElementById('week-2-21');
var btnWeek222 = document.getElementById('week-2-22');
var btnWeek223 = document.getElementById('week-2-23');
var btnWeek224 = document.getElementById('week-2-24');
var btnWeek225 = document.getElementById('week-2-25');
var btnWeek226 = document.getElementById('week-2-26');
var btnWeek227 = document.getElementById('week-2-27');
var btnWeek228 = document.getElementById('week-2-28');
var btnWeek229 = document.getElementById('week-2-29');
var btnWeek230 = document.getElementById('week-2-30');
var btnWeek231 = document.getElementById('week-2-31');
var btnWeek232 = document.getElementById('week-2-32');
var btnWeek233 = document.getElementById('week-2-33');
var btnWeek234 = document.getElementById('week-2-34');
var btnWeek235 = document.getElementById('week-2-35');
var btnWeek236 = document.getElementById('week-2-36');

var btnWeek301 = document.getElementById('week-3-01');
var btnWeek302 = document.getElementById('week-3-02');
var btnWeek303 = document.getElementById('week-3-03');
var btnWeek304 = document.getElementById('week-3-04');
var btnWeek305 = document.getElementById('week-3-05');
var btnWeek306 = document.getElementById('week-3-06');
var btnWeek307 = document.getElementById('week-3-07');
var btnWeek308 = document.getElementById('week-3-08');
var btnWeek309 = document.getElementById('week-3-09');
var btnWeek310 = document.getElementById('week-3-10');
var btnWeek311 = document.getElementById('week-3-11');
var btnWeek312 = document.getElementById('week-3-12');
var btnWeek313 = document.getElementById('week-3-13');
var btnWeek314 = document.getElementById('week-3-14');
var btnWeek315 = document.getElementById('week-3-15');
var btnWeek316 = document.getElementById('week-3-16');
var btnWeek317 = document.getElementById('week-3-17');
var btnWeek318 = document.getElementById('week-3-18');
var btnWeek319 = document.getElementById('week-3-19');
var btnWeek320 = document.getElementById('week-3-20');
var btnWeek321 = document.getElementById('week-3-21');
var btnWeek322 = document.getElementById('week-3-22');
var btnWeek323 = document.getElementById('week-3-23');
var btnWeek324 = document.getElementById('week-3-24');
var btnWeek325 = document.getElementById('week-3-25');
var btnWeek326 = document.getElementById('week-3-26');
var btnWeek327 = document.getElementById('week-3-27');
var btnWeek328 = document.getElementById('week-3-28');
var btnWeek329 = document.getElementById('week-3-29');
var btnWeek330 = document.getElementById('week-3-30');
var btnWeek331 = document.getElementById('week-3-31');
var btnWeek332 = document.getElementById('week-3-32');
var btnWeek333 = document.getElementById('week-3-33');
var btnWeek334 = document.getElementById('week-3-34');
var btnWeek335 = document.getElementById('week-3-35');
var btnWeek336 = document.getElementById('week-3-36');

var btnWeek401 = document.getElementById('week-4-01');
var btnWeek402 = document.getElementById('week-4-02');
var btnWeek403 = document.getElementById('week-4-03');
var btnWeek404 = document.getElementById('week-4-04');
var btnWeek405 = document.getElementById('week-4-05');
var btnWeek406 = document.getElementById('week-4-06');
var btnWeek407 = document.getElementById('week-4-07');
var btnWeek408 = document.getElementById('week-4-08');
var btnWeek409 = document.getElementById('week-4-09');
var btnWeek410 = document.getElementById('week-4-10');
var btnWeek411 = document.getElementById('week-4-11');
var btnWeek412 = document.getElementById('week-4-12');
var btnWeek413 = document.getElementById('week-4-13');
var btnWeek414 = document.getElementById('week-4-14');
var btnWeek415 = document.getElementById('week-4-15');
var btnWeek416 = document.getElementById('week-4-16');
var btnWeek417 = document.getElementById('week-4-17');
var btnWeek418 = document.getElementById('week-4-18');
var btnWeek419 = document.getElementById('week-4-19');
var btnWeek420 = document.getElementById('week-4-20');
var btnWeek421 = document.getElementById('week-4-21');
var btnWeek422 = document.getElementById('week-4-22');
var btnWeek423 = document.getElementById('week-4-23');
var btnWeek424 = document.getElementById('week-4-24');
var btnWeek425 = document.getElementById('week-4-25');
var btnWeek426 = document.getElementById('week-4-26');
var btnWeek427 = document.getElementById('week-4-27');
var btnWeek428 = document.getElementById('week-4-28');
var btnWeek429 = document.getElementById('week-4-29');
var btnWeek430 = document.getElementById('week-4-30');
var btnWeek431 = document.getElementById('week-4-31');
var btnWeek432 = document.getElementById('week-4-32');
var btnWeek433 = document.getElementById('week-4-33');
var btnWeek434 = document.getElementById('week-4-34');
var btnWeek435 = document.getElementById('week-4-35');
var btnWeek436 = document.getElementById('week-4-36');

var btnWeek501 = document.getElementById('week-5-01');
var btnWeek502 = document.getElementById('week-5-02');
var btnWeek503 = document.getElementById('week-5-03');
var btnWeek504 = document.getElementById('week-5-04');
var btnWeek505 = document.getElementById('week-5-05');
var btnWeek506 = document.getElementById('week-5-06');
var btnWeek507 = document.getElementById('week-5-07');
var btnWeek508 = document.getElementById('week-5-08');
var btnWeek509 = document.getElementById('week-5-09');
var btnWeek510 = document.getElementById('week-5-10');
var btnWeek511 = document.getElementById('week-5-11');
var btnWeek512 = document.getElementById('week-5-12');
var btnWeek513 = document.getElementById('week-5-13');
var btnWeek514 = document.getElementById('week-5-14');
var btnWeek515 = document.getElementById('week-5-15');
var btnWeek516 = document.getElementById('week-5-16');
var btnWeek517 = document.getElementById('week-5-17');
var btnWeek518 = document.getElementById('week-5-18');
var btnWeek519 = document.getElementById('week-5-19');
var btnWeek520 = document.getElementById('week-5-20');
var btnWeek521 = document.getElementById('week-5-21');
var btnWeek522 = document.getElementById('week-5-22');
var btnWeek523 = document.getElementById('week-5-23');
var btnWeek524 = document.getElementById('week-5-24');
var btnWeek525 = document.getElementById('week-5-25');
var btnWeek526 = document.getElementById('week-5-26');
var btnWeek527 = document.getElementById('week-5-27');
var btnWeek528 = document.getElementById('week-5-28');
var btnWeek529 = document.getElementById('week-5-29');
var btnWeek530 = document.getElementById('week-5-30');
var btnWeek531 = document.getElementById('week-5-31');
var btnWeek532 = document.getElementById('week-5-32');
var btnWeek533 = document.getElementById('week-5-33');
var btnWeek534 = document.getElementById('week-5-34');
var btnWeek535 = document.getElementById('week-5-35');
var btnWeek536 = document.getElementById('week-5-36');

var btnWeek601 = document.getElementById('week-6-01');
var btnWeek602 = document.getElementById('week-6-02');
var btnWeek603 = document.getElementById('week-6-03');
var btnWeek604 = document.getElementById('week-6-04');
var btnWeek605 = document.getElementById('week-6-05');
var btnWeek606 = document.getElementById('week-6-06');
var btnWeek607 = document.getElementById('week-6-07');
var btnWeek608 = document.getElementById('week-6-08');
var btnWeek609 = document.getElementById('week-6-09');
var btnWeek610 = document.getElementById('week-6-10');
var btnWeek611 = document.getElementById('week-6-11');
var btnWeek612 = document.getElementById('week-6-12');
var btnWeek613 = document.getElementById('week-6-13');
var btnWeek614 = document.getElementById('week-6-14');
var btnWeek615 = document.getElementById('week-6-15');
var btnWeek616 = document.getElementById('week-6-16');
var btnWeek617 = document.getElementById('week-6-17');
var btnWeek618 = document.getElementById('week-6-18');
var btnWeek619 = document.getElementById('week-6-19');
var btnWeek620 = document.getElementById('week-6-20');
var btnWeek621 = document.getElementById('week-6-21');
var btnWeek622 = document.getElementById('week-6-22');
var btnWeek623 = document.getElementById('week-6-23');
var btnWeek624 = document.getElementById('week-6-24');
var btnWeek625 = document.getElementById('week-6-25');
var btnWeek626 = document.getElementById('week-6-26');
var btnWeek627 = document.getElementById('week-6-27');
var btnWeek628 = document.getElementById('week-6-28');
var btnWeek629 = document.getElementById('week-6-29');
var btnWeek630 = document.getElementById('week-6-30');
var btnWeek631 = document.getElementById('week-6-31');
var btnWeek632 = document.getElementById('week-6-32');
var btnWeek633 = document.getElementById('week-6-33');
var btnWeek634 = document.getElementById('week-6-34');
var btnWeek635 = document.getElementById('week-6-35');
var btnWeek636 = document.getElementById('week-6-36');

var btnWeek701 = document.getElementById('week-7-01');
var btnWeek702 = document.getElementById('week-7-02');
var btnWeek703 = document.getElementById('week-7-03');
var btnWeek704 = document.getElementById('week-7-04');
var btnWeek705 = document.getElementById('week-7-05');
var btnWeek706 = document.getElementById('week-7-06');
var btnWeek707 = document.getElementById('week-7-07');
var btnWeek708 = document.getElementById('week-7-08');
var btnWeek709 = document.getElementById('week-7-09');
var btnWeek710 = document.getElementById('week-7-10');
var btnWeek711 = document.getElementById('week-7-11');
var btnWeek712 = document.getElementById('week-7-12');
var btnWeek713 = document.getElementById('week-7-13');
var btnWeek714 = document.getElementById('week-7-14');
var btnWeek715 = document.getElementById('week-7-15');
var btnWeek716 = document.getElementById('week-7-16');
var btnWeek717 = document.getElementById('week-7-17');
var btnWeek718 = document.getElementById('week-7-18');
var btnWeek719 = document.getElementById('week-7-19');
var btnWeek720 = document.getElementById('week-7-20');
var btnWeek721 = document.getElementById('week-7-21');
var btnWeek722 = document.getElementById('week-7-22');
var btnWeek723 = document.getElementById('week-7-23');
var btnWeek724 = document.getElementById('week-7-24');
var btnWeek725 = document.getElementById('week-7-25');
var btnWeek726 = document.getElementById('week-7-26');
var btnWeek727 = document.getElementById('week-7-27');
var btnWeek728 = document.getElementById('week-7-28');
var btnWeek729 = document.getElementById('week-7-29');
var btnWeek730 = document.getElementById('week-7-30');
var btnWeek731 = document.getElementById('week-7-31');
var btnWeek732 = document.getElementById('week-7-32');
var btnWeek733 = document.getElementById('week-7-33');
var btnWeek734 = document.getElementById('week-7-34');
var btnWeek735 = document.getElementById('week-7-35');
var btnWeek736 = document.getElementById('week-7-36');

var btnWeek801 = document.getElementById('week-8-01');
var btnWeek802 = document.getElementById('week-8-02');
var btnWeek803 = document.getElementById('week-8-03');
var btnWeek804 = document.getElementById('week-8-04');
var btnWeek805 = document.getElementById('week-8-05');
var btnWeek806 = document.getElementById('week-8-06');
var btnWeek807 = document.getElementById('week-8-07');
var btnWeek808 = document.getElementById('week-8-08');
var btnWeek809 = document.getElementById('week-8-09');
var btnWeek810 = document.getElementById('week-8-10');
var btnWeek811 = document.getElementById('week-8-11');
var btnWeek812 = document.getElementById('week-8-12');
var btnWeek813 = document.getElementById('week-8-13');
var btnWeek814 = document.getElementById('week-8-14');
var btnWeek815 = document.getElementById('week-8-15');
var btnWeek816 = document.getElementById('week-8-16');
var btnWeek817 = document.getElementById('week-8-17');
var btnWeek818 = document.getElementById('week-8-18');
var btnWeek819 = document.getElementById('week-8-19');
var btnWeek820 = document.getElementById('week-8-20');
var btnWeek821 = document.getElementById('week-8-21');
var btnWeek822 = document.getElementById('week-8-22');
var btnWeek823 = document.getElementById('week-8-23');
var btnWeek824 = document.getElementById('week-8-24');
var btnWeek825 = document.getElementById('week-8-25');
var btnWeek826 = document.getElementById('week-8-26');
var btnWeek827 = document.getElementById('week-8-27');
var btnWeek828 = document.getElementById('week-8-28');
var btnWeek829 = document.getElementById('week-8-29');
var btnWeek830 = document.getElementById('week-8-30');
var btnWeek831 = document.getElementById('week-8-31');
var btnWeek832 = document.getElementById('week-8-32');
var btnWeek833 = document.getElementById('week-8-33');
var btnWeek834 = document.getElementById('week-8-34');
var btnWeek835 = document.getElementById('week-8-35');
var btnWeek836 = document.getElementById('week-8-36');


// Functions ----------

function grade0() {
	navWeek.innerHTML = '<button id="week-0-01" class="btn-week-0">1</button><button id="week-0-02" class="btn-week-0">2</button><button id="week-0-03" class="btn-week-0">3</button><button id="week-0-04" class="btn-week-0">4</button><button id="week-0-05" class="btn-week-0">5</button><button id="week-0-06" class="btn-week-0">6</button><button id="week-0-07" class="btn-week-0">7</button><button id="week-0-08" class="btn-week-0">8</button><button id="week-0-09" class="btn-week-0">9</button><button id="week-0-10" class="btn-week-0">10</button><button id="week-0-11" class="btn-week-0">11</button><button id="week-0-12" class="btn-week-0">12</button><button id="week-0-13" class="btn-week-0">13</button><button id="week-0-14" class="btn-week-0">14</button><button id="week-0-15" class="btn-week-0">15</button><button id="week-0-16" class="btn-week-0">16</button><button id="week-0-17" class="btn-week-0">17</button><button id="week-0-18" class="btn-week-0">18</button><button id="week-0-19" class="btn-week-0">19</button><button id="week-0-20" class="btn-week-0">20</button><button id="week-0-21" class="btn-week-0">21</button><button id="week-0-22" class="btn-week-0">22</button><button id="week-0-23" class="btn-week-0">23</button><button id="week-0-24" class="btn-week-0">24</button><button id="week-0-25" class="btn-week-0">25</button><button id="week-0-26" class="btn-week-0">26</button><button id="week-0-27" class="btn-week-0">27</button><button id="week-0-28" class="btn-week-0">28</button><button id="week-0-29" class="btn-week-0">29</button><button id="week-0-30" class="btn-week-0">30</button><button id="week-0-31" class="btn-week-0">31</button><button id="week-0-32" class="btn-week-0">32</button><button id="week-0-33" class="btn-week-0">33</button><button id="week-0-34" class="btn-week-0">34</button><button id="week-0-35" class="btn-week-0">35</button><button id="week-0-36" class="btn-week-0">36</button>';
	menuWeek();
	}

function grade1() {
	navWeek.innerHTML = '<button id="week-1-01" class="btn-week-1">1</button><button id="week-1-02" class="btn-week-1">2</button><button id="week-1-03" class="btn-week-1">3</button><button id="week-1-04" class="btn-week-1">4</button><button id="week-1-05" class="btn-week-1">5</button><button id="week-1-06" class="btn-week-1">6</button><button id="week-1-07" class="btn-week-1">7</button><button id="week-1-08" class="btn-week-1">8</button><button id="week-1-09" class="btn-week-1">9</button><button id="week-1-10" class="btn-week-1">10</button><button id="week-1-11" class="btn-week-1">11</button><button id="week-1-12" class="btn-week-1">12</button><button id="week-1-13" class="btn-week-1">13</button><button id="week-1-14" class="btn-week-1">14</button><button id="week-1-15" class="btn-week-1">15</button><button id="week-1-16" class="btn-week-1">16</button><button id="week-1-17" class="btn-week-1">17</button><button id="week-1-18" class="btn-week-1">18</button><button id="week-1-19" class="btn-week-1">19</button><button id="week-1-20" class="btn-week-1">20</button><button id="week-1-21" class="btn-week-1">21</button><button id="week-1-22" class="btn-week-1">22</button><button id="week-1-23" class="btn-week-1">23</button><button id="week-1-24" class="btn-week-1">24</button><button id="week-1-25" class="btn-week-1">25</button><button id="week-1-26" class="btn-week-1">26</button><button id="week-1-27" class="btn-week-1">27</button><button id="week-1-28" class="btn-week-1">28</button><button id="week-1-29" class="btn-week-1">29</button><button id="week-1-30" class="btn-week-1">30</button><button id="week-1-31" class="btn-week-1">31</button><button id="week-1-32" class="btn-week-1">32</button><button id="week-1-33" class="btn-week-1">33</button><button id="week-1-34" class="btn-week-1">34</button><button id="week-1-35" class="btn-week-1">35</button><button id="week-1-36" class="btn-week-1">36</button>';
	menuWeek();
	}

function grade2() {
	navWeek.innerHTML = '<button id="week-2-01" class="btn-week-2">1</button><button id="week-2-02" class="btn-week-2">2</button><button id="week-2-03" class="btn-week-2">3</button><button id="week-2-04" class="btn-week-2">4</button><button id="week-2-05" class="btn-week-2">5</button><button id="week-2-06" class="btn-week-2">6</button><button id="week-2-07" class="btn-week-2">7</button><button id="week-2-08" class="btn-week-2">8</button><button id="week-2-09" class="btn-week-2">9</button><button id="week-2-10" class="btn-week-2">10</button><button id="week-2-11" class="btn-week-2">11</button><button id="week-2-12" class="btn-week-2">12</button><button id="week-2-13" class="btn-week-2">13</button><button id="week-2-14" class="btn-week-2">14</button><button id="week-2-15" class="btn-week-2">15</button><button id="week-2-16" class="btn-week-2">16</button><button id="week-2-17" class="btn-week-2">17</button><button id="week-2-18" class="btn-week-2">18</button><button id="week-2-19" class="btn-week-2">19</button><button id="week-2-20" class="btn-week-2">20</button><button id="week-2-21" class="btn-week-2">21</button><button id="week-2-22" class="btn-week-2">22</button><button id="week-2-23" class="btn-week-2">23</button><button id="week-2-24" class="btn-week-2">24</button><button id="week-2-25" class="btn-week-2">25</button><button id="week-2-26" class="btn-week-2">26</button><button id="week-2-27" class="btn-week-2">27</button><button id="week-2-28" class="btn-week-2">28</button><button id="week-2-29" class="btn-week-2">29</button><button id="week-2-30" class="btn-week-2">30</button><button id="week-2-31" class="btn-week-2">31</button><button id="week-2-32" class="btn-week-2">32</button><button id="week-2-33" class="btn-week-2">33</button><button id="week-2-34" class="btn-week-2">34</button><button id="week-2-35" class="btn-week-2">35</button><button id="week-2-36" class="btn-week-2">36</button>';
	menuWeek();
	}

function grade3() {
	navWeek.innerHTML = '<button id="week-3-01" class="btn-week-3">1</button><button id="week-3-02" class="btn-week-3">2</button><button id="week-3-03" class="btn-week-3">3</button><button id="week-3-04" class="btn-week-3">4</button><button id="week-3-05" class="btn-week-3">5</button><button id="week-3-06" class="btn-week-3">6</button><button id="week-3-07" class="btn-week-3">7</button><button id="week-3-08" class="btn-week-3">8</button><button id="week-3-09" class="btn-week-3">9</button><button id="week-3-10" class="btn-week-3">10</button><button id="week-3-11" class="btn-week-3">11</button><button id="week-3-12" class="btn-week-3">12</button><button id="week-3-13" class="btn-week-3">13</button><button id="week-3-14" class="btn-week-3">14</button><button id="week-3-15" class="btn-week-3">15</button><button id="week-3-16" class="btn-week-3">16</button><button id="week-3-17" class="btn-week-3">17</button><button id="week-3-18" class="btn-week-3">18</button><button id="week-3-19" class="btn-week-3">19</button><button id="week-3-20" class="btn-week-3">20</button><button id="week-3-21" class="btn-week-3">21</button><button id="week-3-22" class="btn-week-3">22</button><button id="week-3-23" class="btn-week-3">23</button><button id="week-3-24" class="btn-week-3">24</button><button id="week-3-25" class="btn-week-3">25</button><button id="week-3-26" class="btn-week-3">26</button><button id="week-3-27" class="btn-week-3">27</button><button id="week-3-28" class="btn-week-3">28</button><button id="week-3-29" class="btn-week-3">29</button><button id="week-3-30" class="btn-week-3">30</button><button id="week-3-31" class="btn-week-3">31</button><button id="week-3-32" class="btn-week-3">32</button><button id="week-3-33" class="btn-week-3">33</button><button id="week-3-34" class="btn-week-3">34</button><button id="week-3-35" class="btn-week-3">35</button><button id="week-3-36" class="btn-week-3">36</button>';
	menuWeek();
	}

function grade4() {
	navWeek.innerHTML = '<button id="week-4-01" class="btn-week-4">1</button><button id="week-4-02" class="btn-week-4">2</button><button id="week-4-03" class="btn-week-4">3</button><button id="week-4-04" class="btn-week-4">4</button><button id="week-4-05" class="btn-week-4">5</button><button id="week-4-06" class="btn-week-4">6</button><button id="week-4-07" class="btn-week-4">7</button><button id="week-4-08" class="btn-week-4">8</button><button id="week-4-09" class="btn-week-4">9</button><button id="week-4-10" class="btn-week-4">10</button><button id="week-4-11" class="btn-week-4">11</button><button id="week-4-12" class="btn-week-4">12</button><button id="week-4-13" class="btn-week-4">13</button><button id="week-4-14" class="btn-week-4">14</button><button id="week-4-15" class="btn-week-4">15</button><button id="week-4-16" class="btn-week-4">16</button><button id="week-4-17" class="btn-week-4">17</button><button id="week-4-18" class="btn-week-4">18</button><button id="week-4-19" class="btn-week-4">19</button><button id="week-4-20" class="btn-week-4">20</button><button id="week-4-21" class="btn-week-4">21</button><button id="week-4-22" class="btn-week-4">22</button><button id="week-4-23" class="btn-week-4">23</button><button id="week-4-24" class="btn-week-4">24</button><button id="week-4-25" class="btn-week-4">25</button><button id="week-4-26" class="btn-week-4">26</button><button id="week-4-27" class="btn-week-4">27</button><button id="week-4-28" class="btn-week-4">28</button><button id="week-4-29" class="btn-week-4">29</button><button id="week-4-30" class="btn-week-4">30</button><button id="week-4-31" class="btn-week-4">31</button><button id="week-4-32" class="btn-week-4">32</button><button id="week-4-33" class="btn-week-4">33</button><button id="week-4-34" class="btn-week-4">34</button><button id="week-4-35" class="btn-week-4">35</button><button id="week-4-36" class="btn-week-4">36</button>';
	menuWeek();
	}

function grade5() {
	navWeek.innerHTML = '<button id="week-5-01" class="btn-week-5">1</button><button id="week-5-02" class="btn-week-5">2</button><button id="week-5-03" class="btn-week-5">3</button><button id="week-5-04" class="btn-week-5">4</button><button id="week-5-05" class="btn-week-5">5</button><button id="week-5-06" class="btn-week-5">6</button><button id="week-5-07" class="btn-week-5">7</button><button id="week-5-08" class="btn-week-5">8</button><button id="week-5-09" class="btn-week-5">9</button><button id="week-5-10" class="btn-week-5">10</button><button id="week-5-11" class="btn-week-5">11</button><button id="week-5-12" class="btn-week-5">12</button><button id="week-5-13" class="btn-week-5">13</button><button id="week-5-14" class="btn-week-5">14</button><button id="week-5-15" class="btn-week-5">15</button><button id="week-5-16" class="btn-week-5">16</button><button id="week-5-17" class="btn-week-5">17</button><button id="week-5-18" class="btn-week-5">18</button><button id="week-5-19" class="btn-week-5">19</button><button id="week-5-20" class="btn-week-5">20</button><button id="week-5-21" class="btn-week-5">21</button><button id="week-5-22" class="btn-week-5">22</button><button id="week-5-23" class="btn-week-5">23</button><button id="week-5-24" class="btn-week-5">24</button><button id="week-5-25" class="btn-week-5">25</button><button id="week-5-26" class="btn-week-5">26</button><button id="week-5-27" class="btn-week-5">27</button><button id="week-5-28" class="btn-week-5">28</button><button id="week-5-29" class="btn-week-5">29</button><button id="week-5-30" class="btn-week-5">30</button><button id="week-5-31" class="btn-week-5">31</button><button id="week-5-32" class="btn-week-5">32</button><button id="week-5-33" class="btn-week-5">33</button><button id="week-5-34" class="btn-week-5">34</button><button id="week-5-35" class="btn-week-5">35</button><button id="week-5-36" class="btn-week-5">36</button>';
	menuWeek();
	}

function grade6() {
	navWeek.innerHTML = '<button id="week-6-01" class="btn-week-6">1</button><button id="week-6-02" class="btn-week-6">2</button><button id="week-6-03" class="btn-week-6">3</button><button id="week-6-04" class="btn-week-6">4</button><button id="week-6-05" class="btn-week-6">5</button><button id="week-6-06" class="btn-week-6">6</button><button id="week-6-07" class="btn-week-6">7</button><button id="week-6-08" class="btn-week-6">8</button><button id="week-6-09" class="btn-week-6">9</button><button id="week-6-10" class="btn-week-6">10</button><button id="week-6-11" class="btn-week-6">11</button><button id="week-6-12" class="btn-week-6">12</button><button id="week-6-13" class="btn-week-6">13</button><button id="week-6-14" class="btn-week-6">14</button><button id="week-6-15" class="btn-week-6">15</button><button id="week-6-16" class="btn-week-6">16</button><button id="week-6-17" class="btn-week-6">17</button><button id="week-6-18" class="btn-week-6">18</button><button id="week-6-19" class="btn-week-6">19</button><button id="week-6-20" class="btn-week-6">20</button><button id="week-6-21" class="btn-week-6">21</button><button id="week-6-22" class="btn-week-6">22</button><button id="week-6-23" class="btn-week-6">23</button><button id="week-6-24" class="btn-week-6">24</button><button id="week-6-25" class="btn-week-6">25</button><button id="week-6-26" class="btn-week-6">26</button><button id="week-6-27" class="btn-week-6">27</button><button id="week-6-28" class="btn-week-6">28</button><button id="week-6-29" class="btn-week-6">29</button><button id="week-6-30" class="btn-week-6">30</button><button id="week-6-31" class="btn-week-6">31</button><button id="week-6-32" class="btn-week-6">32</button><button id="week-6-33" class="btn-week-6">33</button><button id="week-6-34" class="btn-week-6">34</button><button id="week-6-35" class="btn-week-6">35</button><button id="week-6-36" class="btn-week-6">36</button>';
	menuWeek();
	}

function grade7() {
	navWeek.innerHTML = '<button id="week-7-01" class="btn-week-7">1</button><button id="week-7-02" class="btn-week-7">2</button><button id="week-7-03" class="btn-week-7">3</button><button id="week-7-04" class="btn-week-7">4</button><button id="week-7-05" class="btn-week-7">5</button><button id="week-7-06" class="btn-week-7">6</button><button id="week-7-07" class="btn-week-7">7</button><button id="week-7-08" class="btn-week-7">8</button><button id="week-7-09" class="btn-week-7">9</button><button id="week-7-10" class="btn-week-7">10</button><button id="week-7-11" class="btn-week-7">11</button><button id="week-7-12" class="btn-week-7">12</button><button id="week-7-13" class="btn-week-7">13</button><button id="week-7-14" class="btn-week-7">14</button><button id="week-7-15" class="btn-week-7">15</button><button id="week-7-16" class="btn-week-7">16</button><button id="week-7-17" class="btn-week-7">17</button><button id="week-7-18" class="btn-week-7">18</button><button id="week-7-19" class="btn-week-7">19</button><button id="week-7-20" class="btn-week-7">20</button><button id="week-7-21" class="btn-week-7">21</button><button id="week-7-22" class="btn-week-7">22</button><button id="week-7-23" class="btn-week-7">23</button><button id="week-7-24" class="btn-week-7">24</button><button id="week-7-25" class="btn-week-7">25</button><button id="week-7-26" class="btn-week-7">26</button><button id="week-7-27" class="btn-week-7">27</button><button id="week-7-28" class="btn-week-7">28</button><button id="week-7-29" class="btn-week-7">29</button><button id="week-7-30" class="btn-week-7">30</button><button id="week-7-31" class="btn-week-7">31</button><button id="week-7-32" class="btn-week-7">32</button><button id="week-7-33" class="btn-week-7">33</button><button id="week-7-34" class="btn-week-7">34</button><button id="week-7-35" class="btn-week-7">35</button><button id="week-7-36" class="btn-week-7">36</button>';
	menuWeek();
	}

function grade8() {
	navWeek.innerHTML = '<button id="week-8-01" class="btn-week-8">1</button><button id="week-8-02" class="btn-week-8">2</button><button id="week-8-03" class="btn-week-8">3</button><button id="week-8-04" class="btn-week-8">4</button><button id="week-8-05" class="btn-week-8">5</button><button id="week-8-06" class="btn-week-8">6</button><button id="week-8-07" class="btn-week-8">7</button><button id="week-8-08" class="btn-week-8">8</button><button id="week-8-09" class="btn-week-8">9</button><button id="week-8-10" class="btn-week-8">10</button><button id="week-8-11" class="btn-week-8">11</button><button id="week-8-12" class="btn-week-8">12</button><button id="week-8-13" class="btn-week-8">13</button><button id="week-8-14" class="btn-week-8">14</button><button id="week-8-15" class="btn-week-8">15</button><button id="week-8-16" class="btn-week-8">16</button><button id="week-8-17" class="btn-week-8">17</button><button id="week-8-18" class="btn-week-8">18</button><button id="week-8-19" class="btn-week-8">19</button><button id="week-8-20" class="btn-week-8">20</button><button id="week-8-21" class="btn-week-8">21</button><button id="week-8-22" class="btn-week-8">22</button><button id="week-8-23" class="btn-week-8">23</button><button id="week-8-24" class="btn-week-8">24</button><button id="week-8-25" class="btn-week-8">25</button><button id="week-8-26" class="btn-week-8">26</button><button id="week-8-27" class="btn-week-8">27</button><button id="week-8-28" class="btn-week-8">28</button><button id="week-8-29" class="btn-week-8">29</button><button id="week-8-30" class="btn-week-8">30</button><button id="week-8-31" class="btn-week-8">31</button><button id="week-8-32" class="btn-week-8">32</button><button id="week-8-33" class="btn-week-8">33</button><button id="week-8-34" class="btn-week-8">34</button><button id="week-8-35" class="btn-week-8">35</button><button id="week-8-36" class="btn-week-8">36</button>';
	menuWeek();
	}

function menuGrade() {
	if (gradeVisible == false) {
		btnGrade.setAttribute('class', 'active');
		navGrade.setAttribute('class', '');
		gradeVisible = true;
		btnWeek.setAttribute('class', '');
		navWeek.setAttribute('class', 'hide');
		weekVisible = false;
		}
	else if (gradeVisible == true) {
		btnGrade.setAttribute('class', '');
		navGrade.setAttribute('class', 'hide');
		gradeVisible = false;
		}
	}

function menuWeek() {
	if (weekVisible == false) {
		btnWeek.setAttribute('class', 'active');
		navWeek.setAttribute('class', '');
		weekVisible = true;
		btnGrade.setAttribute('class', '');
		navGrade.setAttribute('class', 'hide');
		gradeVisible = false;
		}
	else if (weekVisible == true) {
		btnWeek.setAttribute('class', '');
		navWeek.setAttribute('class', 'hide');
		weekVisible = false;
		}
	}


// EventListeners ----------

btnGrade.addEventListener('click', menuGrade);
btnWeek.addEventListener('click', menuWeek);
btnGrade0.addEventListener('click', grade0);
btnGrade1.addEventListener('click', grade1);
btnGrade2.addEventListener('click', grade2);
btnGrade3.addEventListener('click', grade3);
btnGrade4.addEventListener('click', grade4);
btnGrade5.addEventListener('click', grade5);
btnGrade6.addEventListener('click', grade6);
btnGrade7.addEventListener('click', grade7);
btnGrade8.addEventListener('click', grade8);


// Execute ----------

console.log('VVC Weekly Writer');
