const seminarios = [
    {
        slug: 'operacion-lagunas-estabilizacion',
        titulo: 'Operación de Lagunas de Estabilización',
        subtitulo: 'Diagnóstico, control y resolución de fallas en sistemas municipales',
        icono: 'droplets',
        duracion: '2.5 horas (150 min)',
        modalidad: 'Seminario Virtual',
        audiencia: 'Estudiantes y operadores de PTAR',
        nivel: 'Operativo / Formativo',
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
            <a href="./${s.slug}/" class="group block bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden">

                <div class="relative h-28 bg-gradient-to-br from-water-600 via-water-700 to-teal-600 overflow-hidden">
                    <div class="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
                    <div class="absolute right-1/3 -bottom-4 w-16 h-16 bg-teal-300/20 rounded-full blur-lg pointer-events-none"></div>
                    <div class="absolute inset-0 flex items-center justify-between p-5">
                        <div class="w-12 h-12 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-white shadow-lg">
                            <i data-lucide="${s.icono}" class="w-6 h-6"></i>
                        </div>
                        <span class="inline-flex items-center px-2.5 py-1 bg-white/15 backdrop-blur text-white text-[11px] font-bold rounded-full uppercase tracking-wide">${s.modalidad}</span>
                    </div>
                </div>

                <div class="p-5 space-y-4">
                    <div>
                        <h3 class="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-water-700 transition">${s.titulo}</h3>
                        <p class="text-sm text-slate-600 mt-1 leading-relaxed">${s.subtitulo}</p>
                    </div>

                    <div class="flex flex-wrap gap-1.5">
                        ${s.badges.map((b) => `<span class="inline-block px-2 py-0.5 bg-water-50 text-water-700 text-[11px] font-semibold rounded-full border border-water-100">${b}</span>`).join('')}
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div class="flex items-center space-x-2 text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                            <i data-lucide="clock" class="w-4 h-4 text-water-600 shrink-0"></i>
                            <span class="truncate">${s.duracion}</span>
                        </div>
                        <div class="flex items-center space-x-2 text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                            <i data-lucide="users" class="w-4 h-4 text-water-600 shrink-0"></i>
                            <span class="truncate">${s.audiencia}</span>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span class="inline-flex items-center space-x-1.5 text-sm font-bold text-water-600 group-hover:text-water-700 transition">
                            <span>Ver propuesta</span>
                            <i data-lucide="arrow-right" class="w-4 h-4 transition group-hover:translate-x-1"></i>
                        </span>
                        <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">${s.nivel}</span>
                    </div>
                </div>
            </a>
        `
        )
        .join('');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.addEventListener('DOMContentLoaded', renderSeminarios);