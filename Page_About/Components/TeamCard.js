export function TeamCard({ image, name, role }) {
    return `
        <article class="cursor-pointer hover:-translate-y-1.5 transition-all duration-400 ease-in-out">
            <img src="${image}" alt="${name}" class="aspect-[3/4] w-full rounded-xl object-cover">
            <h4 class="mt-3 mb-0 text-[18px] leading-7 font-bold text-[#0f172a]">${name}</h4>
            <p class="m-0 text-[14px] leading-5 font-semibold text-[#1152d4]">${role}</p>
        </article>
    `;
}
