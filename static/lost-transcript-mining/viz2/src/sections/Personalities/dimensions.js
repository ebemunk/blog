export const colors = {
  big5_openness: 'rgba(82, 84, 163, 0.4)',
  big5_conscientiousness: 'rgba(140, 162, 82, 0.4)',
  big5_extraversion: 'rgba(189, 158, 57, 0.4)',
  big5_agreeableness: 'rgba(173, 73, 74, 0.4)',
  big5_neuroticism: 'rgba(165, 81, 148, 0.4)'
}

export default [
  {
    key: 'big5',
    facets: [
      'big5_openness',
      'big5_conscientiousness',
      'big5_extraversion',
      'big5_agreeableness',
      'big5_neuroticism',
    ]
  },
  {
    key: 'big5_openness',
    facets: [
      'facet_adventurousness',
      'facet_artistic_interests',
      'facet_emotionality',
      'facet_imagination',
      'facet_intellect',
      'facet_liberalism',
    ]
  },
  {
    key: 'big5_conscientiousness',
    facets: [
      'facet_achievement_striving',
      'facet_cautiousness',
      'facet_dutifulness',
      'facet_orderliness',
      'facet_self_discipline',
      'facet_self_efficacy',
    ]
  },
  {
    key: 'big5_extraversion',
    facets: [
      'facet_activity_level',
      'facet_assertiveness',
      'facet_cheerfulness',
      'facet_excitement_seeking',
      'facet_friendliness',
      'facet_gregariousness',
    ]
  },
  {
    key: 'big5_agreeableness',
    facets: [
      'facet_altruism',
      'facet_cooperation',
      'facet_modesty',
      'facet_morality',
      'facet_sympathy',
      'facet_trust',
    ]
  },
  {
    key: 'big5_neuroticism',
    facets: [
      'facet_anger',
      'facet_anxiety',
      'facet_depression',
      'facet_immoderation',
      'facet_self_consciousness',
      'facet_vulnerability',
    ]
  }
]
