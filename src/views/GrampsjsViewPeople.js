/*
People list view
*/


import '@vaadin/vaadin-grid/theme/material/vaadin-grid.js'

import {GrampsjsViewObjectsBase} from './GrampsjsViewObjectsBase.js'


export class GrampsjsViewPeople extends GrampsjsViewObjectsBase {

  constructor() {
    super()
    this._columns = {
      grampsId: {title: 'Gramps ID', sort: 'gramps_id'},
      surname: {title: 'Surname', sort: 'surname'},
      given: {title: 'Given name', sort: ''},
      birth: {title: 'Birth Date', sort: 'birth'},
      death: {title: 'Death Date', sort: 'death'},
      change: {title: 'Last changed', sort: 'change'},
    }
    this._fetchUrl = '/api/people/?profile=self&keys=gramps_id,profile,change'
  }

  // eslint-disable-next-line class-methods-use-this
  _getItemPath(item) {
    return `person/${item.grampsId}`
  }

  // eslint-disable-next-line class-methods-use-this
  _formatRow(row, obj) {
    const formattedRow = {
      grampsId: row.gramps_id,
      surname: row?.profile?.name_surname,
      given: row?.profile?.name_given,
      birth: row?.profile?.birth?.date,
      death: row?.profile?.death?.date,
      change: row?.change
    }
    return formattedRow
  }

}


window.customElements.define('grampsjs-view-people', GrampsjsViewPeople)
