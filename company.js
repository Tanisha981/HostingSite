var backdrop = document.querySelector('.backdrop');
var continue_plan = document.querySelector('.continue_plan');
var plan_selected = document.querySelectorAll('.package button');
var not_proceed = document.querySelector('.not_proceed');
var toggle_button = document.querySelector('.toggle_button');
var side_nav_bar = document.querySelector('.nav_main_bar');

for (var i = 0;i<plan_selected.length; i++) {
    plan_selected[i].addEventListener('click',function() {
    	// body...
    	// backdrop.style.display = 'block';
    	// continue_plan.style.display = 'block';

    	backdrop.classList.add('open');
    	continue_plan.classList.add('open');

    });
}

if (not_proceed) {
	not_proceed.addEventListener('click',function(){
	// continue_plan.style.display = 'none';
	// backdrop.style.display = 'none';

	backdrop.classList.remove('open');
    continue_plan.classList.remove('open');
	});
}

toggle_button.addEventListener('click',function() {
	// body...
	// backdrop.style.display = 'block';
	// side_nav_bar.style.display = 'block';

	backdrop.classList.add('open');
	side_nav_bar.classList.add('open');
});

backdrop.addEventListener('click',function() {
	// body...
	// backdrop.style.display = 'none';
	// side_nav_bar.style.display = 'none';
	// continue_plan.style.display = 'none';

    backdrop.classList.remove('open');
    side_nav_bar.classList.remove('open');
    if (continue_plan) {
    	continue_plan.classList.remove('open');
    }

});