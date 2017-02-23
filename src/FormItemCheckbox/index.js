import React from 'react';
import { Form, Checkbox } from 'antd';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

class FormItemCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    const { form } = this.context;
    const { field, onChange } = this.props;
    const { formItemLayout } = form.config;
    const { formItemAttr, fieldAttr, error } = form.config[field];
    const { getFieldDecorator } = form;
    const fieldProps = getFieldDecorator(field, {
      rules: [{required: formItemAttr.required, message: error.message}]
    });

    // 相关options 必须为对象组成的数组，如 [{label: '北京', value: 'beijing'}];
    const propsOptions = this.props.options;
    const configOptions = form.config[field].options;
    const options = Array.isArray(propsOptions) ? propsOptions : (configOptions||[]);

    return <FormItem {...formItemLayout} {...formItemAttr}>
      {fieldProps(<CheckboxGroup {...fieldAttr} options={options} onChange={onChange} />)}
    </FormItem>;
  }
}

FormItemCheckbox.contextTypes = {
  form: React.PropTypes.object.isRequired
};

export default FormItemCheckbox;
