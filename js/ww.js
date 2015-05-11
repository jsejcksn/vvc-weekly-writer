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

btnWeek001.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek002.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek003.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek004.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek005.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek006.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek007.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek008.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek009.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek010.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek011.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek012.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek013.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek014.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek015.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek016.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek017.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek018.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek019.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek020.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek021.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek022.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek023.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek024.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek025.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek026.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek027.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek028.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek029.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek030.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek031.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek032.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek033.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek034.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek035.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek036.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek101.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek102.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek103.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek104.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek105.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek106.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek107.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek108.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek109.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek110.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek111.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek112.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek113.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek114.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek115.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek116.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek117.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek118.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek119.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek120.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek121.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek122.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek123.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek124.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek125.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek126.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek127.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek128.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek129.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek130.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek131.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek132.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek133.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek134.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek135.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek136.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek201.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek202.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek203.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek204.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek205.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek206.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek207.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek208.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek209.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek210.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek211.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek212.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek213.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek214.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek215.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek216.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek217.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek218.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek219.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek220.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek221.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek222.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek223.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek224.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek225.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek226.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek227.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek228.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek229.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek230.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek231.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek232.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek233.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek234.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek235.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek236.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek301.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek302.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek303.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek304.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek305.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek306.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek307.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek308.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek309.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek310.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek311.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek312.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek313.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek314.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek315.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek316.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek317.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek318.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek319.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek320.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek321.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek322.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek323.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek324.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek325.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek326.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek327.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek328.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek329.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek330.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek331.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek332.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek333.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek334.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek335.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek336.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek401.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek402.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek403.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek404.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek405.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek406.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek407.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek408.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek409.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek410.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek411.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek412.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek413.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek414.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek415.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek416.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek417.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek418.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek419.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek420.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek421.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek422.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek423.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek424.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek425.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek426.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek427.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek428.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek429.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek430.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek431.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek432.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek433.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek434.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek435.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek436.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek501.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek502.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek503.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek504.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek505.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek506.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek507.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek508.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek509.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek510.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek511.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek512.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek513.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek514.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek515.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek516.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek517.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek518.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek519.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek520.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek521.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek522.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek523.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek524.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek525.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek526.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek527.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek528.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek529.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek530.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek531.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek532.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek533.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek534.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek535.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek536.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek601.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek602.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek603.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek604.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek605.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek606.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek607.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek608.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek609.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek610.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek611.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek612.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek613.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek614.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek615.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek616.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek617.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek618.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek619.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek620.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek621.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek622.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek623.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek624.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek625.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek626.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek627.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek628.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek629.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek630.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek631.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek632.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek633.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek634.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek635.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek636.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek701.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek702.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek703.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek704.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek705.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek706.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek707.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek708.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek709.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek710.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek711.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek712.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek713.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek714.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek715.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek716.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek717.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek718.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek719.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek720.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek721.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek722.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek723.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek724.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek725.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek726.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek727.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek728.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek729.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek730.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek731.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek732.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek733.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek734.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek735.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek736.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek801.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek802.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek803.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek804.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek805.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek806.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek807.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek808.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek809.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek810.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek811.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek812.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek813.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek814.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek815.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek816.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek817.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek818.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek819.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek820.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek821.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek822.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek823.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek824.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek825.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek826.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek827.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek828.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek829.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek830.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek831.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek832.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek833.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek834.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek835.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})
btnWeek836.addEventListener('click', function() {content.src = './pubs/0-01/index.html'; menuWeek();})


// Execute ----------

console.log('VVC Weekly Writer');
