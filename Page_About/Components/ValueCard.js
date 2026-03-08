export function ValueCard({ icon, title, description }) {
    return `
        <article class="rounded-xl border border-[#f1f5f9] bg-white p-8 text-left shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 ease-in-out">
            <div class="grid h-12 w-12 place-items-center rounded-lg bg-[#1152d4] text-[18px] text-white"><i class="${icon}"></i></div>
            <h4 class="mt-6 mb-3 text-[20px] leading-7 font-bold text-[#0f172a]">${title}</h4>
            <p class="m-0 text-[16px] leading-6 text-[#475569]">${description}</p>
        </article>
    `;
}
