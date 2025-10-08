document.addEventListener('DOMContentLoaded', function() {
    const careerForm = document.getElementById('career-form');

    careerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('full-name').value;
        const jobTitle = document.getElementById('job-title').value;
        const email = document.getElementById('email').value;

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Show success message
        showSuccessMessage(name, jobTitle);

        // Reset form
        this.reset();
    });

    // Form validation
    function validateForm() {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const resume = document.getElementById('resume').value;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Phone validation (basic)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))) {
            alert('Please enter a valid phone number');
            return false;
        }

        // Resume file validation
        if (resume) {
            const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
            if (!allowedExtensions.exec(resume)) {
                alert('Please upload a valid resume file (PDF, DOC, or DOCX)');
                return false;
            }
        }

        return true;
    }

    function showSuccessMessage(name, jobTitle) {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'career-success-message';
        successMessage.innerHTML = `
            <h3>Application Submitted Successfully!</h3>
            <p>Thank you, ${name}! Your application for the <strong>${jobTitle}</strong> position has been received.</p>
            <p>We'll review your application and contact you soon.</p>
        `;

        // Style the success message
        successMessage.style.cssText = `
            background: linear-gradient(135deg, var(--primary-color), #7bb035);
            color: white;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin-top: 20px;
            box-shadow: var(--shadow);
        `;

        // Insert before the form
        careerForm.parentNode.insertBefore(successMessage, careerForm);

        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }

    // Smooth scrolling for CTA button
    document.querySelector('.career-cta').addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



// Toggle dropdown on click (works for touch devices). Put this near the end of body or in your script file.
document.addEventListener('click', function(e) {
    const clickedDropBtn = e.target.closest('.dropdown .dropbtn');

    // If clicked the dropdown's button -> toggle only that dropdown
    if (clickedDropBtn) {
        e.preventDefault(); // if href="#" to avoid jump
        const parent = clickedDropBtn.parentElement;
        parent.classList.toggle('open');
        // close any other open dropdowns
        document.querySelectorAll('.dropdown.open').forEach(d => {
            if (d !== parent) d.classList.remove('open');
        });
        return;
    }

    // Clicked outside any dropdown -> close all
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
});

// Optional: close on Escape key
document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
    }
});