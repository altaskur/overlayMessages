function standardizedBadge(badge: string): string{
    badge = badge.replaceAll("-","")
    console.log(badge)
    badge = badge.includes("bits") ? "bits" : badge
    badge = badge.includes("gift") ? "gift" : badge

    return badge
}

export function createBadges (badges: []):Node {
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
      glhfpledge: assetsPath + 'glhfpledge.png',
      vip: assetsPath + "vip.png",
      no_video: assetsPath + "no_video.png",
      no_audio: assetsPath + "no_audio.png",
      glitchcon2020: assetsPath + "glitchcon2020.png"
    }

    const badgesDiv = document.createElement("div")
    badgesDiv.classList.add("badges-inner")

    for (let badge in badges) {
      badge = standardizedBadge(badge)
      const imgBadge = document.createElement("img");
      imgBadge.src = badgesTypes[badge]; //! todo
      badgesDiv.appendChild(imgBadge)
    }
    return badgesDiv
  }
