// buttonClicked(1);
const thirdSectionData = {
    1: {
      number: "1",
      heading: "CHOOSE A PROGRAM AND UNIVERSITY",
      paragraph:
        "You can continue your education in Turkish, English or other languages at the universities, where high-quality education is given at a global level, and work in Türkiye to develop your career. You can decide on a program according to your criteria by using the “Study Finder” search tool and choose a university to continue your education.",
    },
    2: {
      number: "2",
      heading: "LEARN ABOUT SCHOLARSHIPS AND FINANCING",
      paragraph:
        "If you want a scholarship to study in Türkiye, you have many different options. However, keep in mind that the opportunities and rewards offered by the institutions granting scholarships vary. You can find out more about the available scholarships on the official website of your selected university.",
    },
    3: {
      number: "3",
      heading: "PREPARE YOUR APPLICATION DOCUMENTS",
      paragraph:
        "After choosing a university, all you have to do is to collect the required application documents. These documents may vary by university and program because universities determine their own conditions in the admission of international students. Please check the introductory page of your selected university to learn more about the required documents.",
    },
    4: {
      number: "4",
      heading: "CHECK EXAMINATION REQUIREMENTS",
      paragraph:
        "You may need to meet requirements such as a university entrance exam, language score or skill test in order to be admitted to the program you chose to study in Türkiye. In addition to the internationally recognized exams, universities may require you to submit the scores of the exams you took in your country or the scores of the exams carried out by your selected university. Check the detailed program page for the requirements.",
    },
    5: {
      number: "5",
      heading: "APPLY FOR STUDENT VISA",
      paragraph:
        "Before coming to study in Türkiye, you need to get a student visa from the nearest Consulate of the Republic of Türkiye. Student visa procedures can take time and therefore it is important that you apply for a student visa as soon as you are admitted to your selected university.",
    },
  };
  
  // Handle button click event
  function buttonClicked(buttonNumber) {
    // Get the heading and paragraph elements
    const headingSection3 = document.getElementById("dynamic-heading-section3");
    const paragraphSection3 = document.getElementById("dynamic-paragraph-section3");
    const numberSection3 = document.getElementById("dynamic-numberBtn-section3");
  
    // Update heading and paragraph based on button clicked
    numberSection3.textContent = thirdSectionData[buttonNumber].number;
    headingSection3.textContent = thirdSectionData[buttonNumber].heading;
    paragraphSection3.textContent = thirdSectionData[buttonNumber].paragraph;
  
    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".section3-btn");
    buttons.forEach((button) => button.classList.remove("active"));
  
    // Add active class to the clicked button
    buttons[buttonNumber - 1].classList.add("active");
  }
  
  //slider
  let currentIndex = 0;
  
      function moveSlide(direction) {
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;
  
        currentIndex += direction;
  
        if (currentIndex >= totalSlides) {
          currentIndex = 0;
        } else if (currentIndex < 0) {
          currentIndex = totalSlides - 1;
        }
  
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
      }
  
      //section 5 slider
      const sliderSection5 = document.getElementById('slider-section5');
          let indexSection5 = 0;
          const slideCountSection5 = 6; // Total number of original slides
          const slidesToShowSection5 = 3; // How many slides to show at a time
          const slideWidthSection5 = 300; // Width of each slide in pixels
          const marginRightSection5 = 30; // Margin between slides
  
          function autoSlideSection5() {
              indexSection5++;
              if (indexSection5 > slideCountSection5 - slidesToShowSection5) {
                  indexSection5 = 0; // Reset to the first set of images
                  sliderSection5.style.transition = 'none'; // Disable transition for instant reset
                  sliderSection5.style.transform = `translateX(0px)`; // Reset to first position
              } else {
                  sliderSection5.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
              }
  
              // Adjust transform to show the current set of slides
              sliderSection5.style.transform = `translateX(${-indexSection5 * (slideWidthSection5 + marginRightSection5)}px)`;
          }
  
          // Start auto-slide
          setInterval(autoSlideSection6, 2000); // Slide every 2 seconds
      const sliderSection6 = document.getElementById('slider-section6');
          let indexSection6 = 0;
          const slideCountSection6 = 6; // Total number of original slides
          const slidesToShowSection6 = 3; // How many slides to show at a time
          const slideWidthSection6 = 300; // Width of each slide in pixels
          const marginRightSection6 = 30; // Margin between slides
  
          function autoSlideSection6() {
              indexSection6++;
              if (indexSection6 > slideCountSection6 - slidesToShowSection6) {
                  indexSection6 = 0; // Reset to the first set of images
                  sliderSection6.style.transition = 'none'; // Disable transition for instant reset
                  sliderSection6.style.transform = `translateX(0px)`; // Reset to first position
              } else {
                  sliderSection6.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
              }
  
              // Adjust transform to show the current set of slides
              sliderSection6.style.transform = `translateX(${-indexSection5 * (slideWidthSection6 + marginRightSection6)}px)`;
          }
  
          // Start auto-slide
          setInterval(autoSlideSection5, 2000); // Slide every 2 seconds
  
  
          // Section 7 slider
  
          const section7Slider = document.querySelector(".section7-slider");
  const section7Dots = document.querySelectorAll(".section7-dot");
  let section7CurrentIndex = 0;
  
  // Function to update slider position
  function updateSection7Slider(index) {
    const sliderWidth =
      document.querySelector(".section7-slider-container").offsetWidth;
    section7Slider.style.transform = `translateX(${-index * sliderWidth}px)`;
    updateSection7Dots(index);
  }
  
  // Function to update dots
  function updateSection7Dots(index) {
    section7Dots.forEach((dot) => dot.classList.remove("active"));
    section7Dots[index].classList.add("active");
  }
  
  // Add click event to dots
  section7Dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      section7CurrentIndex = index;
      updateSection7Slider(section7CurrentIndex);
    });
  });
  
  // Automatically update slider every 3 seconds
  setInterval(() => {
    section7CurrentIndex = (section7CurrentIndex + 1) % section7Dots.length;
    updateSection7Slider(section7CurrentIndex);
  }, 3000);
  
  
  //Section 8 slider
  const section8Slider = document.querySelector(".section8-slider");
          const section8Slides = document.querySelectorAll('.section8-slide');
          const totalSection8Slides = section8Slides.length;
          let currentSection8Index = 0;
  
          function updateSection8Slider() {
              currentSection8Index = (currentSection8Index + 1) % totalSection8Slides; // Move to the next slide
  
              // If the index reaches 6 (the last image), reset to 0 (the first image)
              if (currentSection8Index === 6) {
                  setTimeout(() => {
                      currentSection8Index = 0; // Reset to the first image
                      section8Slider.style.transition = "none"; // Disable transition for instant jump
                      section8Slider.style.transform = `translateX(0)`; // Jump back to the first slide
                  }, 500); // Delay to show the last image briefly
              }
  
              // Adjust the slider position
              section8Slider.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
              section8Slider.style.transform = `translateX(${-currentSection8Index * (100 / 6)}%)`; // Adjust the slider position
          }
  
          // Automatically update slider every 3 seconds
          setInterval(updateSection8Slider, 3000);