const settings = document.querySelector('.settings');
const colors = document.querySelector('.color-picker');
settings.onclick = () => {
    colors.classList.add('show');
}

const close = document.querySelector('.close');
close.onclick = () => {
    colors.classList.remove('show');
}


const colorThemes = document.querySelectorAll('[name="theme"]');
const storeTheme = function(theme){
    localStorage.setItem("theme", theme);
}

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) =>{
        if (themeOption.id ===activeTheme){
            themeOption.checked = true;
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});

document.onload = retrieveTheme();

var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
	
window.addEventListener('load', () => {

	const nameInput = document.querySelector('#name');
	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})

	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		console.log(task);

		if (task.trim().length == 0) {
			alert("Dont leave the task blank :)");
		} else {

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		const task_check_el = document.createElement('input');
		task_check_el.classList.add('check');
		task_check_el.type = 'checkbox';

		task_content_el.appendChild(task_check_el);
		task_content_el.appendChild(task_input_el);
		
		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_time_el = document.createElement('div');
		task_time_el.classList.add('time');
		task_time_el.innerHTML = n + ' ' + time;

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_time_el);

		task_el.appendChild(task_actions_el);
		
		input.value = '';

		list_el.appendChild(task_el);

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
		}
	});
});


var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form2");
	const input = document.querySelector("#new-task-input2");
	const list_el = document.querySelector("#tasks2");


	

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
		
		const task_check_el = document.createElement('input');
		task_check_el.classList.add('check');
		task_check_el.type = 'checkbox';

		task_content_el.appendChild(task_check_el);
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_time_el = document.createElement('div');
		task_time_el.classList.add('time');
		task_time_el.innerHTML = n + ' ' + time;

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_time_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});

const help = document.querySelector('#helpIcon');
const helpCont = document.querySelector('.help');
const helpClose = document.querySelector('.helpClose');

help.onclick = () => {
    helpCont.classList.add('help-dd');
}

helpClose.onclick = () => {
    helpCont.classList.remove('help-dd');
}


const notification = document.querySelector('#notiIcon');
const notiCont = document.querySelector('.notification');
const notiCLose = document.querySelector('.notiClose');

notification.onclick = () => {
    notiCont.classList.add('noti-dd');
}

notiCLose.onclick = () => {
    notiCont.classList.remove('noti-dd');
}


const profile = document.querySelector('#profIcon');
const profCont = document.querySelector('.profile');
const profClose = document.querySelector('.profClose');

profile.onclick = () => {
	profCont.classList.add('profile-dd');
}

profClose.onclick = () => {
	profCont.classList.remove('profile-dd');
}

