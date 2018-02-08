export const colors = {
  big5_openness: 'rgba(44, 162, 95, 0.4)',
  big5_conscientiousness: 'rgba(136, 86, 167, 0.4)',
  big5_extraversion: 'rgba(67, 162, 202, 0.4)',
  big5_agreeableness: 'rgba(227, 74, 51, 0.4)',
  big5_neuroticism: 'rgba(28, 144, 153, 0.4)',
  needs: 'rgba(127, 205, 187, 0.4)',
  values: 'rgba(221, 28, 119, 0.4)',
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    key: 'needs',
    facets: [
      'need_challenge',
      'need_closeness',
      'need_curiosity',
      'need_excitement',
      'need_harmony',
      'need_ideal',
      'need_liberty',
      'need_love',
      'need_practicality',
      'need_self_expression',
      'need_stability',
      'need_structure',
    ],
  },
  {
    key: 'values',
    facets: [
      'value_conservation',
      'value_hedonism',
      'value_openness_to_change',
      'value_self_enhancement',
      'value_self_transcendence',
    ],
  },
]
