import React from 'react'
import GluuLabel from './GluuLabel'
import { Col, FormGroup, CustomInput, InputGroup } from 'Components'
import { useTranslation } from 'react-i18next'
import GluuTooltip from './GluuTooltip'

function GluuSelectRow({
  label,
  name,
  value,
  formik,
  values,
  lsize,
  rsize,
  doc_category,
  disabled,
  handleChange
}) {
  const { t } = useTranslation()
  return (
    <FormGroup row>
      <GluuLabel label={label} size={lsize} doc_category={doc_category} doc_entry={name} />
      <Col sm={rsize}>
        <InputGroup>
          <CustomInput
            type="select"
            id={name}
            data-testid={name}
            name={name}
            defaultValue={value}
            onChange={(event) => {
              if (handleChange) { formik.handleChange; handleChange(event) }
              else { formik.handleChange; }
            }}
            disabled={disabled}
          >
            <option value="">{t('actions.choose')}...</option>
            {values.map((item, key) => (
              <option value={item} key={key}>
                {item}
              </option>
            ))}
          </CustomInput>
        </InputGroup>
      </Col>
    </FormGroup>
  )
}

GluuSelectRow.defaultProps = {
  values: [],
  lsize: 3,
  rsize: 9,
  disabled: false,
}

export default GluuSelectRow
