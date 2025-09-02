

  // Gráfico de Habilidades
  const skillsCtx = document.getElementById('skillsChart').getContext('2d');
  new Chart(skillsCtx, {
    type: 'radar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Azure'],
      datasets: [{
        label: 'Nível de Conhecimento',
        data: [90, 85, 70, 80, 75, 60],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });

  // Gráfico de Projetos
  const projectsCtx = document.getElementById('projectsChart').getContext('2d');
  new Chart(projectsCtx, {
    type: 'bar',
    data: {
      labels: ['2021', '2022', '2023', '2024', '2025'],
      datasets: [{
        label: 'Projetos Concluídos',
        data: [5, 12, 18, 25, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });


<!-- PARTICLES JS -->
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 50 },
        "size": { "value": 4 },
        "move": { "speed": 2 },
        "line_linked": { "enable": true }
      }
    });



  <!-- CHARTS JS -->
    const chart1 = new Chart(document.getElementById('chart1'), {
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

    const chart2 = new Chart(document.getElementById('chart2'), {
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

    const chart3 = new Chart(document.getElementById('chart3'), {
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
  