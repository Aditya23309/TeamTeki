// your code goes here
const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-center');
const icon = hamburgerBtn.querySelector('.icon');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
  hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
  icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});






const panel = document.getElementById('floatingPanel');
const submenu = document.getElementById('submenu');
const detailsList = document.getElementById('detailsList');
const leftPara1 = document.getElementById('leftPara1');
const leftPara2 = document.getElementById('leftPara2');
const leftPara3 = document.getElementById('leftPara3');
const rightPara = document.getElementById('rightPara');
const rightImage = document.getElementById('rightImage');

const menuData = {
    menu1: {
      leftPara1: "TeamTeki Revenue Enablement Platform 👉",
      leftPara2: "Explore the leading AI-powered revenue enablement platform built to ramp reps faster, engage the modern buyer, and close more deals.",
      leftPara3: "💎️ Products",
      rightPara: "💥 USE CASES",
      
      submenu: ['Copilot', 'Role-Plays', 'Sales Training','Coaching','Sales Content Management','Digital Sales Rooms','Conversation Intelligence'],
   details: [
  'AI Role-Plays: Nail every pitch with an AI-selling simulator',
  'Sales Coaching: Develop reps with proven top-performer skills',
  'Buyer Engagement: Close deals faster with tailored buying experiences',
  'Training: Turn potential into performance',
  'Kick-offs: Reinforce learning with impactful sessions',
  'Enablement: Align messaging across revenue channels'
]
    },
    menu2: {
      leftPara1: "Solutions overview 👉",
      leftPara2: "Solutions that fuel growth for leading revenue organizations",
       leftPara3: "💸 REVENUE ENABLEMENT SOLUTIONS",
     
      rightPara: "🎯 Industries",
      submenu: ['For Sales Enablement', 'For Marketing Teams','For Revenue Leadership','For Sales Managers'],
      details: ['Automotive', 'Medical Devices','Consumer Goods','Chemical','Technology']
    },
    menu3: {
      leftPara1: "Services 👉",
      leftPara2: "Our team of experts are here to accelerate your time to value and ensure ongoing success",
       leftPara3: "💎️ Products",
       image: "https://www.mindtickle.com/wp-content/uploads/2025/02/Cisco-logo.png",
      rightPara: "Services Reviews",
      submenu: ['Get Started Quickly', 'Achieve Ongoing Success', 'Scale With Our Experts'],
      details: ['Learn How the Cisco Leverages TeamTeki to the Scale Coaching Efforts ...? We leveraged TeamTeki to roll out training to 18,000 of our sellers in six weeks... We also had an extremely high adoption rate for the training, and we really owe a lot of it to the TeamTeki platform and working with TeamTeki Professional Services.','View Their Story 👉']
    },
     menu4: {
      leftPara1: "Customer Stories 👉",
      leftPara2: "See how GTM teams use TeamTeki to drive revenue growth.",
      leftPara3: "Customer Video Testimonials 💥 ",
      rightPara: "Janssen India Cuts Rep Ramp Time in Half With TeamTeki",
        image: "https://www.mindtickle.com/wp-content/uploads/2025/02/Janssen_Pharmaceuticals_logo-logo.png",
      submenu: ['Juniper Networks', 'Cisco', 'Integrace Health','Janssen India','MetricStream','Signifyd'],
      details: ['Our vision was to have all learning happen in one portal. With TeamTeki, sales reps can easily go in, find what they need to learn, and go out and do their work. And we have visibility into how they’re engaging with the platform. It’s a one-stop shop for everyone.']
    },
    menu5: {
      leftPara1: "Resource Library 👉",
      leftPara2: "Check out TeamTeki resource library for helpful tips, guides, and strategies to level up your sales game",
       leftPara3: "🍎 Learn & Explore",
      image: "https://www.mindtickle.com/wp-content/uploads/2025/03/image.png",
      rightPara: "🌟 Featured Resource",
      submenu: ['Blogs', 'Events','On-demand Webinars','Podcast: Ready, Set, Sell','Video Series: Ready or Not?'],
      details: ['See whats top of mind for 600+ sales managers ']
    },
    menu6: {
      leftPara1: "About TeamTeki👉",
      leftPara2: "Learn about the people behind the platform.",
       leftPara3: "",
       image: "https://teamteki.com/wp-content/uploads/2023/09/Logo-Team-Teki-Small.png",
      rightPara: "🌟 Careers",
      submenu: ['Why TeamTeki', 'News', 'Career'],
      details: ['See what opportunities are open at TeamTeki and Join the team']
    }

  };
function openPanel(menuKey) {
  const data = menuData[menuKey];
  if (!data) return;

  leftPara1.innerHTML = `<strong>${data.leftPara1}</strong>`;
  leftPara2.textContent = data.leftPara2;
  leftPara3.textContent = data.leftPara3;
  rightPara.innerHTML = `<strong>${data.rightPara}</strong>`;

  if (data.image) {
    rightImage.src = data.image;
    rightImage.style.display = 'block';
  } else {
    rightImage.style.display = 'none';
  }

  submenu.innerHTML = '';
  data.submenu.forEach(item => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = item;
    submenu.appendChild(link);
  });

  detailsList.innerHTML = '';
  if (menuKey === 'menu1') {
    detailsList.className = 'details-grid';
    data.details.forEach(detail => {
      const [title, ...desc] = detail.split(':');
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.innerHTML = `<h4>${title}</h4><p>${desc.join(':')}</p>`;
      detailsList.appendChild(div);
    });
  } else {
    detailsList.className = '';
    const ul = document.createElement('ul');
    data.details.forEach(d => {
      const li = document.createElement('li');
      li.textContent = d;
      ul.appendChild(li);
    });
    detailsList.appendChild(ul);
  }

  panel.classList.add('show');
}

// Nav link hover opens panel (desktop)
document.querySelectorAll('.nav-item a').forEach(link => {
  const menuKey = link.dataset.menu;

  link.addEventListener('mouseenter', () => {
    if (window.innerWidth > 767) {
      openPanel(menuKey);
    }
  });

  link.addEventListener('click', (e) => {
    e.stopPropagation(); // Let the page navigate naturally
  });
});

// Dropdown button click opens panel (mobile or desktop)
document.querySelectorAll('.dropdown-arrow').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const menuKey = e.currentTarget.dataset.menu;
    openPanel(menuKey);
  });
});

// Close on outside click (desktop)
document.addEventListener('click', (e) => {
  const isInside = panel.contains(e.target) || e.target.closest('nav');
  if (!isInside && window.innerWidth > 767) {
    panel.classList.remove('show');
  }
});

document.getElementById('closeFloatingMobile').addEventListener('click', () => {
  if (window.innerWidth <= 767) {
    panel.classList.remove('show');
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.arrow-left');
  const nextButton = document.querySelector('.arrow-right');
  let index = 0;

  function showSlide(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  // Auto-slide
  const autoSlide = setInterval(() => {
    showSlide(index + 1);
  }, 5000);

  // Manual controls
  prevButton.addEventListener('click', () => {
    showSlide(index - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(index + 1);
  });
});











// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  mobileSubmenu.classList.remove('show');
});

// Menu click






 document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        const targetId = tab.getAttribute("data-tab");

        // Remove 'active' class from all tabs and tab contents
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        // Add 'active' class to clicked tab and corresponding content
        tab.classList.add("active");
        document.getElementById(targetId).classList.add("active");
      });
    });
  });

    let currentIndex = 0;
let panels = document.querySelectorAll('.panel');
let navButtons = document.querySelectorAll('.nav-icon');
let sliderInterval = null;

function showPanel(index) {
  panels.forEach((panel, i) => {
    panel.classList.toggle('active-view', i === index);
  });

  navButtons.forEach((btn, i) => {
    btn.classList.toggle('current-tab', i === index);
  });
}

function switchSection(index) {
  currentIndex = index;
  showPanel(currentIndex);
  resetSlider();
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % panels.length;
  showPanel(currentIndex);
}

function startSlider() {
  sliderInterval = setInterval(autoSlide, 5000);
}

function resetSlider() {
  clearInterval(sliderInterval);
  startSlider();
}

document.addEventListener('DOMContentLoaded', () => {
  showPanel(currentIndex); // Initial load
  startSlider();
});







  const links = document.querySelectorAll('#linkList a');
    const previewImage = document.getElementById('previewImage');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        // Update image
        const imgSrc = this.getAttribute('data-img');
        previewImage.src = imgSrc;

        // Update active link
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
    const readMoreLink = document.querySelector('.read-more');
    
    if (readMoreLink) {
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Read more clicked!');
        });
    }
});





function startAutoSlide() {
  slideInterval = setInterval(() => {
    const nextIndex = (currentIndexx + 1) % logos.length;
    changeImages(nextIndex);
  }, 4000);
}

// Click on logos to change images manually
logos.forEach((logo, index) => {
  logo.addEventListener('click', () => {
    clearInterval(slideInterval);
    changeImages(index);
    startAutoSlide();
  });
});

// Initialize slider
changeImages(0);
startAutoSlide();








