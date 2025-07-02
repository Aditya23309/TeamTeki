// your code goes here
const panel = document.getElementById('floatingPanel');
  const submenu = document.getElementById('submenu');
  const detailsList = document.getElementById('detailsList');
  const leftPara1 = document.getElementById('leftPara1');
  const leftPara2 = document.getElementById('leftPara2');
  const leftPara3 = document.getElementById('leftPara3');
  const rightPara = document.getElementById('rightPara');
  

  const menuData = {
    menu1: {
      leftPara1: "Mindtickle’s Revenue Enablement Platform 👉",
      leftPara2: "Explore the leading AI-powered revenue enablement platform built to ramp reps faster, engage the modern buyer, and close more deals.",
      leftPara3: "💎️ Products",
      rightPara: "💥 USE CASES",
      
      submenu: ['Copilot', 'Role-Plays', 'Sales Training','Coaching','Sales Content Management','Digital Sales Rooms','Conversation Intelligence'],
      details: ['NEW! AI Role-PlaysNail every pitch with an AI-selling simulator', 'AI Sales Coaching Develop reps with proven top-performer skills', 'Buyer Engagement Close deals faster with tailored buying experiences', 'Personalized Sales Training Turn potential into performance','Sales Kick-offs Reinforce learning with impactful sessions','Partner Enablement Align messaging across revenue-generating channels']
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
      details: ['Learn How the Cisco Leverages Mindtickle to the Scale Coaching Efforts ...? We leveraged Mindtickle to roll out training to 18,000 of our sellers in six weeks... We also had an extremely high adoption rate for the training, and we really owe a lot of it to the Mindtickle platform and working with Mindtickle’s Professional Services.','View Their Story 👉']
    },
     menu4: {
      leftPara1: "Customer Stories 👉",
      leftPara2: "See how GTM teams use Mindtickle to drive revenue growth.",
      leftPara3: "Customer Video Testimonials 💥 ",
      rightPara: "Janssen India Cuts Rep Ramp Time in Half With Mindtickle",
        image: "https://www.mindtickle.com/wp-content/uploads/2025/02/Janssen_Pharmaceuticals_logo-logo.png",
      submenu: ['Juniper Networks', 'Cisco', 'Integrace Health','Janssen India','MetricStream','Signifyd'],
      details: ['Our vision was to have all learning happen in one portal. With Mindtickle, sales reps can easily go in, find what they need to learn, and go out and do their work. And we have visibility into how they’re engaging with the platform. It’s a one-stop shop for everyone.']
    },
    menu5: {
      leftPara1: "Resource Library 👉",
      leftPara2: "Check out Mindtickle’s resource library for helpful tips, guides, and strategies to level up your sales game",
       leftPara3: "🍎 Learn & Explore",
      image: "https://www.mindtickle.com/wp-content/uploads/2025/03/image.png",
      rightPara: "🌟 Featured Resource",
      submenu: ['Blogs', 'Events','On-demand Webinars','Podcast: Ready, Set, Sell','Video Series: Ready or Not?'],
      details: ['See whats top of mind for 600+ sales managers ']
    },
    menu6: {
      leftPara1: "About Mindtickle👉",
      leftPara2: "Learn about the people behind the platform.",
       leftPara3: "",
       image: "https://teamteki.com/wp-content/uploads/2023/09/Logo-Team-Teki-Small.png",
      rightPara: "🌟 Careers",
      submenu: ['Why Mindtickle', 'News', 'Career'],
      details: ['See what opportunities are open at Mindtickle and Join the team']
    }

  };

  function openPanel(menuKey) {
    const data = menuData[menuKey];

    // Update paragraph content
    leftPara1.innerHTML = `<strong>${data.leftPara1}</strong>`;
    leftPara2.textContent = data.leftPara2;
    leftPara3.textContent = data.leftPara3;
    rightPara.innerHTML = `<strong>${data.rightPara}</strong>`;
    document.getElementById('rightImage').src = data.image;
    

const rightImage = document.getElementById('rightImage');
  if (data.image) {
    rightImage.src = data.image;
    rightImage.style.display = 'block';
  } else {
    rightImage.style.display = 'none';
  }

    // Update submenu
    submenu.innerHTML = '';
    data.submenu.forEach(item => {
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = item;
      submenu.appendChild(link);
    });

    // Update details list
    detailsList.innerHTML = '';
    data.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      detailsList.appendChild(li);
    });

    panel.classList.add('show');
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    const isInside = panel.contains(e.target) || e.target.closest('nav') || e.target.closest('header');
    if (!isInside) {
      panel.classList.remove('show');
    }
  });



 const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function nextSlide() {
      index = (index + 1) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 4000);












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
