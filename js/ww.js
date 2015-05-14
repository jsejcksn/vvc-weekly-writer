// Virtual Village Classroom - Weekly Writer

// Variables ----------

var baseUrl = '';
var btnGrade = document.getElementById('btn-grade');
var btnPrint = document.getElementById('btn-print');
var btnWeek = document.getElementById('btn-week');
var currentGrade = '';
var currentWeek = '';
var content = document.getElementById('content-iframe');
var docString = '';
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

var navWeek00 = document.getElementById('week-00');
var navWeek0 = document.getElementById('week-0');
var navWeek1 = document.getElementById('week-1');
var navWeek2 = document.getElementById('week-2');
var navWeek3 = document.getElementById('week-3');
var navWeek4 = document.getElementById('week-4');
var navWeek5 = document.getElementById('week-5');
var navWeek6 = document.getElementById('week-6');
var navWeek7 = document.getElementById('week-7');
var navWeek8 = document.getElementById('week-8');

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
	setGrade('K');
	hideMsg();
	navWeek0.setAttribute('class', '');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade1() {
	setGrade('1');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', '');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade2() {
	setGrade('2');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', '');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade3() {
	setGrade('3');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', '');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade4() {
	setGrade('4');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', '');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade5() {
	setGrade('5');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', '');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade6() {
	setGrade('6');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', '');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade7() {
	setGrade('7');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', '');
	navWeek8.setAttribute('class', 'hide');
	menuWeek();
	}

function grade8() {
	setGrade('8');
	hideMsg();
	navWeek0.setAttribute('class', 'hide');
	navWeek1.setAttribute('class', 'hide');
	navWeek2.setAttribute('class', 'hide');
	navWeek3.setAttribute('class', 'hide');
	navWeek4.setAttribute('class', 'hide');
	navWeek5.setAttribute('class', 'hide');
	navWeek6.setAttribute('class', 'hide');
	navWeek7.setAttribute('class', 'hide');
	navWeek8.setAttribute('class', '');
	menuWeek();
	}

function hideMsg() {
	navWeek00.setAttribute('class', 'hide');
	}

function loadWeek() {
	content.src = baseUrl + docString;
	menuWeek();
	showPrintBtn();
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

function printPub() {
	content.src = baseUrl + 'print.pdf';
	}

function setGrade(gr) {
	currentGrade = gr;
	btnGrade.innerHTML = 'Grade ' + currentGrade;
	}

function setWeek(wk) {
	currentWeek = wk;
	btnWeek.innerHTML = 'Week ' + currentWeek;
	}

function showPrintBtn() {
	btnPrint.setAttribute('class', '');
	}


// EventListeners ----------

btnGrade.addEventListener('click', menuGrade);
btnPrint.addEventListener('click', printPub);
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

btnWeek001.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek002.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek003.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek004.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek005.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek006.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek007.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek008.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek009.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek010.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek011.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek012.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek013.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek014.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek015.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek016.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek017.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek018.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek019.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek020.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek021.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek022.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek023.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek024.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek025.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek026.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek027.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek028.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek029.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek030.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek031.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek032.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek033.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek034.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek035.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek036.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek101.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek102.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek103.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek104.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek105.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek106.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek107.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek108.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek109.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek110.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek111.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek112.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek113.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek114.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek115.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek116.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek117.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek118.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek119.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek120.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek121.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek122.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek123.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek124.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek125.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek126.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek127.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek128.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek129.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek130.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek131.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek132.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek133.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek134.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek135.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek136.addEventListener('click', function() {
	baseUrl = './pubs/0-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek201.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek202.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek203.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek204.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek205.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek206.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek207.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek208.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek209.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek210.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek211.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek212.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek213.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek214.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek215.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek216.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek217.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek218.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek219.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek220.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek221.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek222.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek223.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek224.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek225.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek226.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek227.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek228.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek229.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek230.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek231.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek232.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek233.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek234.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek235.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek236.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek301.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek302.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek303.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek304.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek305.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek306.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek307.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek308.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek309.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek310.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek311.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek312.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek313.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek314.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek315.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek316.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek317.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek318.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek319.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek320.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek321.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek322.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek323.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek324.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek325.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek326.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek327.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek328.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek329.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek330.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek331.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek332.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek333.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek334.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek335.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek336.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek401.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek402.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek403.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek404.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek405.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek406.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek407.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek408.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek409.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek410.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek411.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek412.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek413.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek414.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek415.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek416.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek417.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek418.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek419.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek420.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek421.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek422.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek423.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek424.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek425.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek426.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek427.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek428.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek429.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek430.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek431.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek432.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek433.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek434.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek435.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek436.addEventListener('click', function() {
	baseUrl = './pubs/2-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek501.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek502.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek503.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek504.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek505.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek506.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek507.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek508.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek509.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek510.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek511.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek512.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek513.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek514.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek515.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek516.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek517.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek518.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek519.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek520.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek521.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek522.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek523.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek524.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek525.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek526.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek527.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek528.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek529.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek530.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek531.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek532.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek533.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek534.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek535.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek536.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek601.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek602.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek603.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek604.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek605.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek606.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek607.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek608.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek609.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek610.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek611.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek612.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek613.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek614.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek615.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek616.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek617.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek618.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek619.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek620.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek621.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek622.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek623.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek624.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek625.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek626.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek627.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek628.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek629.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek630.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek631.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek632.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek633.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek634.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek635.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek636.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek701.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek702.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek703.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek704.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek705.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek706.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek707.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek708.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek709.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek710.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek711.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek712.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek713.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek714.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek715.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek716.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek717.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek718.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek719.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek720.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek721.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek722.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek723.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek724.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek725.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek726.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek727.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek728.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek729.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek730.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek731.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek732.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek733.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek734.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek735.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek736.addEventListener('click', function() {
	baseUrl = './pubs/5-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})

btnWeek801.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('1');
	loadWeek();})
btnWeek802.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('2');
	loadWeek();})
btnWeek803.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('3');
	loadWeek();})
btnWeek804.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('4');
	loadWeek();})
btnWeek805.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('5');
	loadWeek();})
btnWeek806.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('6');
	loadWeek();})
btnWeek807.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('7');
	loadWeek();})
btnWeek808.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('8');
	loadWeek();})
btnWeek809.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('9');
	loadWeek();})
btnWeek810.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('10');
	loadWeek();})
btnWeek811.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('11');
	loadWeek();})
btnWeek812.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('12');
	loadWeek();})
btnWeek813.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('13');
	loadWeek();})
btnWeek814.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('14');
	loadWeek();})
btnWeek815.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('15');
	loadWeek();})
btnWeek816.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('16');
	loadWeek();})
btnWeek817.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('17');
	loadWeek();})
btnWeek818.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('18');
	loadWeek();})
btnWeek819.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('19');
	loadWeek();})
btnWeek820.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('20');
	loadWeek();})
btnWeek821.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('21');
	loadWeek();})
btnWeek822.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('22');
	loadWeek();})
btnWeek823.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('23');
	loadWeek();})
btnWeek824.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('24');
	loadWeek();})
btnWeek825.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('25');
	loadWeek();})
btnWeek826.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('26');
	loadWeek();})
btnWeek827.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('27');
	loadWeek();})
btnWeek828.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('28');
	loadWeek();})
btnWeek829.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('29');
	loadWeek();})
btnWeek830.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('30');
	loadWeek();})
btnWeek831.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('31');
	loadWeek();})
btnWeek832.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('32');
	loadWeek();})
btnWeek833.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('33');
	loadWeek();})
btnWeek834.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('34');
	loadWeek();})
btnWeek835.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('35');
	loadWeek();})
btnWeek836.addEventListener('click', function() {
	baseUrl = './pubs/8-01/';
	docString = 'index.html';
	setWeek('36');
	loadWeek();})


// Execute ----------

console.log('VVC Weekly Writer');
