const blockedDomains = ["index.hu", "origo.hu", "888.hu", "pestisracok.hu", "24.hu"];

const blockedProfiles = [
    "facebook.com/origohirek",
    "facebook.com/indexhu",
    "facebook.com/deakdanielelemez", 
    "facebook.com/orbanviktor",
    "facebook.com/pestisracok.pstv",
    "facebook.com/megafonkozpont",
    "facebook.com/fideszhu",
    "facebook.com/groups/293535385295906",
    "facebook.com/lazarjanosfidesz",
    "facebook.com/24ponthu",
    "facebook.com/menczer.tamas"
];

const catGifs = [
    "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
    "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif",
    "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif",
    "https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif",
    "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
    "https://media.giphy.com/media/yFQ0ywscgobJK/giphy.gif",
    "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
    "https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif"
]

function getAllText(node) {
  let txt = "";
  node.childNodes.forEach(c => {
    if (c.nodeType === Node.TEXT_NODE) txt += c.textContent.toLowerCase();
    else if (c.nodeType === Node.ELEMENT_NODE) txt += getAllText(c);
  });
  return txt;
}

let usedPosts = new WeakSet();

function replacePostWithCat(post) {
    if (usedPosts.has(post)) return;

    const randomGif = catGifs[Math.floor(Math.random() * catGifs.length)];

    const img = document.createElement("img");
    img.src = randomGif
    img.alt = "Cica";
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.objectFit = "cover";

    post.innerHTML = "";
    post.appendChild(img);

    post.style.cursor = 'pointer';

    post.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=i5T_sTNilUU&ab_channel=BongoCat', '_blank');
    });

    usedPosts.add(post);
}

let usedFeeds = new WeakSet();

function replaceFeedWithCats(feed) {    
    if (usedFeeds.has(feed)) return;
    
    const targetSelector = '.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x193iq5w.x1l7klhg.x1iyjqo2.xs83m0k.x2lwn1j';
    const targetDiv = feed.querySelector(targetSelector);

    const randomGif = catGifs[Math.floor(Math.random() * catGifs.length)];

    const img = document.createElement("img");
    img.src = randomGif
    img.alt = "Cica";
    img.style.width = "100%";
    img.style.borderRadius = "8px";
    img.style.objectFit = "cover";


    if (!targetDiv) {
        feed.innerHTML = "";
        feed.appendChild(img);
    }
    else {
        targetDiv.innerHTML = "";
        targetDiv.appendChild(img);
    }

    feed.style.cursor = 'pointer';

    feed.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=i5T_sTNilUU&ab_channel=BongoCat', '_blank');
    });
    usedFeeds.add(feed);
}

function scanAndReplace() {
  const postsLists = Array.from(document.querySelectorAll('.x1yztbdb.x1n2onr6.xh8yej3.x1ja2u2z')).map(el => {
        const html = el.innerHTML.toLowerCase();
        const text = getAllText(el);

        const matched = blockedDomains.some(d => html.includes(d) || text.includes(d)) ||
                        blockedProfiles.some(p => html.includes(p) || text.includes(p));

        if (matched) replacePostWithCat(el);
    }); 

    const feedLists = Array.from(document.querySelectorAll('.x16qb05n.xi7iut8.x1dm3dyd.x1pv694p.x10h3on.x78zum5.xdt5ytf.x1b0wou9.x12nagc.x6ikm8r.x10wlt62.x1n2onr6')).map(el => {
        const html = el.innerHTML.toLowerCase();
        const text = getAllText(el);

        const matched = blockedDomains.some(d => html.includes(d) || text.includes(d)) ||
                        blockedProfiles.some(p => html.includes(p) || text.includes(p));

        if (matched) replaceFeedWithCats(el);
    }); 
}

setInterval(()=>{
    scanAndReplace();
}, 500);

// const observer = new MutationObserver(mutations => scanAndReplace());
// observer.observe(document.body, { childList: true, subtree: true });

