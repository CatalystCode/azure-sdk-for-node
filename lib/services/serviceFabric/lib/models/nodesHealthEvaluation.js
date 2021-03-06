/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NodesHealthEvaluation class.
 * @constructor
 * @member {array} [unhealthyEvaluations]
 * 
 * @member {number} [totalCount]
 * 
 * @member {number} [maxPercentUnhealthyNodes]
 * 
 */
function NodesHealthEvaluation() {
  NodesHealthEvaluation['super_'].call(this);
}

util.inherits(NodesHealthEvaluation, models['HealthEvaluation']);

/**
 * Defines the metadata of NodesHealthEvaluation
 *
 * @returns {object} metadata of NodesHealthEvaluation
 *
 */
NodesHealthEvaluation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NodesHealthEvaluation',
    type: {
      name: 'Composite',
      className: 'NodesHealthEvaluation',
      modelProperties: {
        description: {
          required: false,
          serializedName: 'Description',
          type: {
            name: 'String'
          }
        },
        aggregatedHealthState: {
          required: false,
          serializedName: 'AggregatedHealthState',
          type: {
            name: 'Number'
          }
        },
        Kind: {
          required: true,
          serializedName: 'Kind',
          type: {
            name: 'String'
          }
        },
        unhealthyEvaluations: {
          required: false,
          serializedName: 'UnhealthyEvaluations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UnhealthyEvaluationElementType',
                type: {
                  name: 'Composite',
                  className: 'UnhealthyEvaluation'
                }
            }
          }
        },
        totalCount: {
          required: false,
          serializedName: 'TotalCount',
          type: {
            name: 'Number'
          }
        },
        maxPercentUnhealthyNodes: {
          required: false,
          serializedName: 'MaxPercentUnhealthyNodes',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = NodesHealthEvaluation;
