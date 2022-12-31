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
]

const cosSub = [
    {
        id:18,
        service:"Microdermabrasion",
        content:`It can exfoliate the skin, reduce signs of aging, and make the skin appear more even.
        the procedure is safe for all skiin types.`
    },
    {
        id:19,
        service:"Derma Peels",
        content:`Lightens the skin by removing dull skin and revealing healthier tissue. Reduces irregular
        skintone caused by sun damage, hyper-pigmantation and melasma.`
    },
    {
        id:20,
        service:"Skin Whitening Treatment",
        content:`Glutathione is very useful for the human body as it is an antiovidant that is present in the 
        human cells. it works by neutralizing free radicals, boosting immunity and also helps in the detoxification of the body.`
    },
    {
        id:21,
        service:"Pigmentation Treatment",
        content:`Hyperpigmentation refers to patches of skin that become darker than the surrounding areas of skin.
        It occurs when the skin produces excess melanin, the pigment that gives skin its color. It can affect people of all skin types.`
    },
    {
        id:22,
        service:"PRP Therapy",
        content:`It help support wound healing in trauma and joint injury. The technique can adddress
        male pattern baldness, stimulate the growth of hair transplants and enhance other cosmetic procedures.`
    },
    {
        id:23,
        service:"Laser Hair Removal",
        content:`Laser hair removal is a medical procedure that uses a concentrated beam of light (laser)
        to remove unwanted hair.`
    },
    {
        id:24,
        service:"Mole, Tag and warts removal",
        content:`The CO2 laser and a scalpel is used to cut the skin in a circular fashion around the wart.
        `
    },
    {
        id:25,
        service:"Photo facial",
        content:`Photo facial using IPL therapy can help treat Enlarged pores and acne, small blood vessels visible on the face,
        sun spots, pigmentation irregularities and skin redness.`
    },
    {
        id:26,
        service:"Permanent eyebrow color",
        content:`Makes the eyebrow texture and shape more visible and splendid. Also helps make eyebrows symmetrical.`
    },
    {
        id:27,
        service:"Laser tattoo removal",
        content:`Laser can be used to remove a tattoo with a US FDA approved equipment, and to completely
        eliminate the tattoo ink remnants from the skin to restore the skin in its original glory.`
    },
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
        name: "Surgical",
        subServices: serSub
    }

]
