function parseBadges (badges: []):Node {
  const assetsPath = '/assets/img/badges/'

  const badgesTypes: {} = {
    founder: assetsPath + 'founder.png',
    bits: assetsPath + 'bits.png',
    gift: assetsPath + 'gift.png',
    broadcaster: assetsPath + 'broadcaster.png',
    moderator: assetsPath + 'moderator.png',
    premium: assetsPath + 'premium.png',
    subscriber: assetsPath + 'subscriber.png',
    partner: assetsPath + 'partner.png',
    glhfpledge: assetsPath + 'glhf-pledge.png',
    vip: assetsPath + "vip.png",
    no_video: assetsPath + "no_video.png",
    no_audio: assetsPath + "no_audio.png"
  }
  const badgesDiv = document.createElement("div")
  badgesDiv.classList.add("badges-inner")

  for (let badge in badges) {

   

    badge = badge.replaceAll("-","")
    console.log(badge)
    badge = badge.includes("bits") ? "bits" : badge
    badge = badge.includes("gift") ? "gift" : badge

    const imgBadge = document.createElement("img");
    imgBadge.src = badgesTypes[badge]; //! todo
    console.log()
    badgesDiv.appendChild(imgBadge)
  }

  return badgesDiv
}

export default parseBadges
