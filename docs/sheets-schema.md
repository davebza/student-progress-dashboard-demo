# Proposed Sheets schema

## Learners
`learner_id | display_name | cohort | target | active`

## Measures
`measure_id | learner_id | date | measure_type | value | source`

## Observations
`observation_id | learner_id | date | category | note | owner`

## StatusRules
`rule_id | status | metric | operator | threshold | priority`

The dashboard should calculate status in the service layer, keeping display code independent from spreadsheet layout.
