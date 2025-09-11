const navItems     = document.querySelectorAll('.nav-item');
const navGetstarted= document.querySelector('.btn');
let   lastActive   = document.querySelector('.nav-item.active');

navItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    // Remove active class from all nav-items
    navItems.forEach(link => link.classList.remove('active'));
    navGetstarted.classList.remove('active');
    // Add active class to the clicked one
    this.classList.add('active');
    // Update the last active reference
    lastActive = this;
  });

  item.addEventListener('mouseenter', function () {
    navItems.forEach(link => link.classList.remove('active'));
    navGetstarted.classList.remove('active');
  });

  item.addEventListener('mouseleave', function () {
    lastActive ? lastActive.classList.add('active') : '';
  });
});

navGetstarted.addEventListener('click', function (e) {
  e.preventDefault();
  navItems.forEach(link => link.classList.remove('active'));
  this.classList.add('active');
  lastActive = this;
});

navGetstarted.addEventListener('mouseenter', function () {
  navItems.forEach(link => link.classList.remove('active'));
});

navGetstarted.addEventListener('mouseleave', function () {
  lastActive ? lastActive.classList.add('active') : '';
});


/* code nav bar  */ 
const [btnlist, btnx, navbar] = ['btn-list', 'btn-x', 'nav-bar'].map(id => document.getElementById(id));
const dsmn = 'd-sm-none';

btnlist.addEventListener('click', function() {
  this.classList.add(dsmn);
	btnx.classList.remove(dsmn);
	navbar.classList.remove(
		dsmn, 
		'align-item-center',
		'gap-3',
	);
	navbar.classList.remove('fadeDown');
	navbar.classList.add('fadeUp');
	setTimeout(() => {
		navbar.classList.remove('fadeUp');
	}, 500);
});

btnx.addEventListener('click', function() {
	this.classList.add(dsmn);
	btnlist.classList.remove(dsmn);
	navbar.classList.remove('fadeUp');
	navbar.classList.add('fadeDown');
	setTimeout(() => {
		navbar.classList.add(
			dsmn, 
			'align-item-center', 
			'gap-3'
		);
		navbar.classList.remove('fadeDown');
	}, 500);
});
/* end */ 

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1200) {
		btnx.classList.add(dsmn);
		btnlist.classList.remove(dsmn);
		navbar.classList.add(
			dsmn, 
			'align-item-center', 
			'gap-3'
		);
  }
});

function smoothScroll(targetId, offset = 70) {
  const target = document.querySelector(targetId);
  if (target) {
    const elementPosition = target.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth"
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    smoothScroll(this.getAttribute("href"), 70); // 70px offset for navbar
  });
});


let scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('load', toggleScrollTop);
document.addEventListener('scroll', toggleScrollTop);

