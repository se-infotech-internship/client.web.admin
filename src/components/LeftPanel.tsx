import React from 'react'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftList: {
      width: 330,
      height: '93vh',
      // maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      borderRight: '3px solid grey',
    },
  })
)

export default function ListUsers() {
  const classes = useStyles()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={classes.leftList}>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Button color="primary" variant="contained">Шаблони повідомлень</Button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <Button color="primary" variant="contained">Відправити повідомлення</Button>
        </div>
        <div style={{ textAlign: 'center', marginTop: 30 }}>
          <FormControl component="fieldset">
            <FormGroup aria-label="position">
              <FormControlLabel
                value="Шаблон-1"
                control={<Checkbox color="primary" />}
                label="Шаблон-1"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Шаблон-2"
                control={<Checkbox color="primary" />}
                label="Шаблон-2"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
        </div>
      </div>
    </div>
  )
}


