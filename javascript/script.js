window.addEventListener('DOMContentLoaded', () => {

  // --- GRÁFICOS DASHBOARD 01 redondo  ---
  const chart1El = document.getElementById('chart1');
  if (chart1El) {
    new Chart(chart1El, {
      type: 'doughnut',
      data: {
        labels: ['HTML', 'CSS', 'JS'],
        datasets: [{
          label: 'Front-end',
          data: [85, 80, 75],
          backgroundColor: ['#DD4B25', '#2965F1', '#F0DB4F']
        }]
      },
      options: { animation: { animateScale: true } }
    });
  }

  const chart2El = document.getElementById('chart2');
  if (chart2El) {
    new Chart(chart2El, {
      type: 'doughnut',
      data: {
        labels: ['Python', 'ASP.NET MVC', 'SQL'],
        datasets: [{
          label: 'Back-end',
          data: [80, 70, 75],
          backgroundColor: ['#306998', '#68217A', '#F7931A']
        }]
      },
      options: { animation: { animateScale: true } }
    });
  }

  const chart3El = document.getElementById('chart3');
  if (chart3El) {
    new Chart(chart3El, {
      type: 'doughnut',
      data: {
        labels: ['Azure', 'DevOps', 'Segurança'],
        datasets: [{
          label: 'DevOps & Azure',
          data: [70, 60, 65],
          backgroundColor: ['#0078D7', '#FFB900', '#E81123']
        }]
      },
      options: { animation: { animateScale: true } }
    });
  }

});

// PARTICLES JS -->
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 50 },
        "size": { "value": 4 },
        "move": { "speed": 2 },
        "line_linked": { "enable": true }
      }
    });


// JavaScript para o botão Leia mais / Leia menos -->
const readMoreBtn = document.getElementById('btn-readmore');
  const aboutFull = document.getElementById('about-full');

  readMoreBtn.addEventListener('click', () => {
    if (aboutFull.style.display === 'none') {
      aboutFull.style.display = 'block';
      readMoreBtn.textContent = 'Leia menos';
    } else {
      aboutFull.style.display = 'none';
      readMoreBtn.textContent = 'Leia mais';
    }
  });

  // Foto interativa: clique gira e hover adiciona sombra
  const img = document.getElementById('profile-img');
  let rotated = false;

  img.addEventListener('click', () => {
    rotated = !rotated;
    img.style.transform = rotated ? 'rotateY(360deg) scale(1.05)' : 'rotateY(0deg) scale(1)';
  });

  img.addEventListener('mouseover', () => {
    img.style.boxShadow = '0 20px 30px rgba(0,0,0,0.5)';
  });

  img.addEventListener('mouseout', () => {
    img.style.boxShadow = 'none';
  });


  // FRONT-END
new Chart(document.getElementById('chart1'), {
  type: 'doughnut',
  data: {
    labels: ['Completado', 'Faltando'],
    datasets: [{
      label: 'Front-end',
      data: [80, 20],
      backgroundColor: ['#3b82f6', '#d1d5db'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: { display: false }
    }
  }
});

// BACK-END
new Chart(document.getElementById('chart2'), {
  type: 'doughnut',
  data: {
    labels: ['Completado', 'Faltando'],
    datasets: [{
      label: 'Back-end',
      data: [60, 40],
      backgroundColor: ['#3b82f6', '#d1d5db'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: { display: false }
    }
  }
});

// DEVOPS
new Chart(document.getElementById('chart3'), {
  type: 'doughnut',
  data: {
    labels: ['Completado', 'Faltando'],
    datasets: [{
      label: 'DevOps & Azure',
      data: [50, 50],
      backgroundColor: ['#3b82f6', '#d1d5db'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: { display: false }
    }
  }
});

// ======= Gráfico de Habilidades =======
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
  type: 'doughnut',
  data: {
    labels: ['HTML', 'CSS', 'Bootstrap', 'Python', 'SQL', 'Azure'],
    datasets: [{
      label: 'Habilidades (%)',
      data: [90, 85, 80, 70, 60, 50],
      backgroundColor: [
        '#E34F26', '#1572B6', '#563D7C', '#3776AB', '#F29111', '#0078D4'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      },
      legend: {
        position: 'bottom'
      }
    }
  }
});

// ======= Gráfico de Projetos Finalizados =======
const projectsCtx = document.getElementById('projectsChart').getContext('2d');
new Chart(projectsCtx, {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{
      label: 'Projetos Finalizados',
      data: [0, 0, 1, 4, 4],
      backgroundColor: '#3b82f6'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
});
