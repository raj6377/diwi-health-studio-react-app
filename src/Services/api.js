import genImage from '../Images/services/1.jpg'
import cosImage from '../Images/services/2.jpg'
import serImage from '../Images/services/3.jpg'

const genSub = [
    {
        id:1,
        service:"White cavity fillings",
        content:`With early delection technology, advanced
        imaging, and safe filling materials, addressing tooth decay is easier than ever.`
    },
    {
        id:2,
        service:"Dental crowns",
        content:`Cover up and protect a damaged tooth.
        Often the final step of implant and root canal treatment.`
    },
    {
        id:3,
        service:"Gum disease treatment",
        content:`Gum disease if the top cause of tooth loss. Early detection and personlized
        treatment options will keep your mouth healty`
    },
    {
        id:4,
        service:"Botox for TMJ,head, & facial pain",
        content:`Beyond aesthetic improvements, Botox treats common dental
        concerns like jaw pain, headaches, migraines, and clenching.`
    },
    {
        id:5,
        service:"Dentures",
        content:`Replace missing teeth! Fully and partial dentures created with top-of-the-line
         materals restore your ability to chew, speak and smile.`
    },
    {
        id:6,
        service:"Nightguards/mouthguards",
        content:`Stop grinding your teeth at night and protect your teeth
         during sports with a custom-made-mouthguard.`
    },
]

const cosSub = [
    {
        id:7,
        service:"Invisalign",
        content:`The easy way to strighten your teeth. The Invisalign system uses
         clear, removable aligners. Great for adults and teens.`
    },
    {
        id:8,
        service:"Teeth Whitening",
        content:`Sit back, relax, and catch up on your favorite show while we brighten your smile a shade or two
        with professional teeth whitening treatments.`
    },
    {
        id:9,
        service:"Veneers",
        content:`Thin, custom-made shells that fit aroung your teeth to improve their 
        appearance. Usually made of porcelain or resin, veneers change the shape, color, length, or size of your teeth.`
    },
    {
        id: 10,
        service:"Cosmetic Bonding",
        content:`Made from natural tooth-colored materials, bonding covers up 
        and eliminates imperfections like chips, cracks, stains and gaps.`
    },
    {
        id:11,
        service:"Botox",
        content:"Reduces wrinkles and other signs of aging and treats TMJ, head, and facial pain."
    }
]

const serSub = [
    {
        id:12,
        service:"Implants",
        content:`The most effective tooth replacement option available today.
        Restores the look, function, and health of your teeth.`
    },
    {
        id:13,
        service:"Implant-supported dentures",
        content:"Restores all the teeth in your upper and lower jaw with as few as 4 dental implants."
    },
    {
        id:14,
        service:"Wisdom tooth removal",
        content:`If your wisdom teeth are causing problems, then removing them
        may be necessary to ensure long-term dental health.`
    },
    {
        id:15,
        service:"Extractions",
        content:`Removing a tooth is always a last resort, but may be necessary 
        when dealing with severe decay, infection or tooth with poor prognosis.`
    },
    {
        id:16,
        service:"Bridges",
        content:"'Bridge' a gap in your smile with our custom-made and picture-perfect restorations." 
    },
    {
        id:17,
        service:"Bone Grafting",
        content:"Suffering from dental bone loss? Restore the structure, strength, and apperance of your smile."
    },
]


export const services = [
    {
        id:101,
        image:genImage,
        name: "General",
        subServices: genSub
    },
    {
        id:102,
        image:cosImage,
        name: "Cosmetic",
        subServices: cosSub
    },
    {
        id:103,
        image: serImage,
        name: "Sergical",
        subServices: serSub
    }

]
