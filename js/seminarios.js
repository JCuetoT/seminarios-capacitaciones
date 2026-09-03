const seminarios = [
    {
        slug: 'operacion-lagunas-estabilizacion',
        titulo: 'Operación de Lagunas de Estabilización',
        subtitulo: 'Diagnóstico, control y resolución de fallas en sistemas municipales',
        duracion: '2.5 horas (150 min)',
        modalidad: 'Seminario Virtual',
        audiencia: 'Estudiantes y operadores de PTAR',
        badges: ['Saneamiento Básico', 'Tratamiento de Aguas'],
        resumen: 'Diagnóstico, control y resolución de fallas en sistemas municipales',
    },
];

function renderSeminarios() {
    const grid = document.getElementById('seminarios-grid');
    if (!grid) return;

    grid.innerHTML = seminarios
        .map(
            (s) => `
            <a href="./${s.slug}/" class="group block bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition p-6 space-y-4">
                <div class="flex items-start justify-between gap-3">
                    <div class="p-2.5 bg-water-50 text-water-600 rounded-xl">
                        <i data-lucide="droplets" class="w-6 h-6"></i>
                    </div>
                    <span class="inline-flex items-center px-2.5 py-1 bg-slate-100 text-slate-500 text-[11px] font-semibold rounded-full uppercase tracking-wide">Seminario</span>
                </div>

                <div class="space-y-2">
                    <h3 class="text-lg font-bold text-slate-900 leading-snug group-hover:text-water-700 transition">${s.titulo}</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">${s.subtitulo}</p>
                    <div class="flex flex-wrap gap-1.5">
                        ${s.badges.map((b) => `<span class="inline-block px-2 py-0.5 bg-water-50 text-water-700 text-[11px] font-semibold rounded-full border border-water-100">${b}</span>`).join('')}
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-100 space-y-2 text-sm">
                    <div class="flex items-center space-x-2 text-slate-600">
                        <i data-lucide="clock" class="w-4 h-4 text-water-600 shrink-0"></i>
                        <span>${s.duracion}</span>
                    </div>
                    <div class="flex items-center space-x-2 text-slate-600">
                        <i data-lucide="video" class="w-4 h-4 text-water-600 shrink-0"></i>
                        <span>${s.modalidad}</span>
                    </div>
                    <div class="flex items-center space-x-2 text-slate-600">
                        <i data-lucide="users" class="w-4 h-4 text-water-600 shrink-0"></i>
                        <span>${s.audiencia}</span>
                    </div>
                </div>

                <span class="inline-flex items-center space-x-1.5 text-sm font-semibold text-water-600 group-hover:text-water-700 transition">
                    <span>Ver propuesta completa</span>
                    <i data-lucide="arrow-right" class="w-4 h-4 transition group-hover:translate-x-0.5"></i>
                </span>
            </a>
        `
        )
        .join('');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', renderSeminarios);