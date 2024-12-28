document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const skillsSidebar = document.getElementById('skills-sidebar');
    const skillsToggle = document.getElementById('skills-toggle');
    
    // Function to set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Check for saved theme preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Handle theme toggle click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Handle system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Skills sidebar toggle functionality
    const isCollapsed = localStorage.getItem('skillsSidebarCollapsed') === 'true';
    if (isCollapsed) {
        skillsSidebar.classList.add('collapsed');
    }

    skillsToggle.addEventListener('click', () => {
        skillsSidebar.classList.toggle('collapsed');
        localStorage.setItem('skillsSidebarCollapsed', skillsSidebar.classList.contains('collapsed'));
    });
}); 