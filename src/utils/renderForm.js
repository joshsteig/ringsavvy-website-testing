export default function renderForm(script) {
  return {
    __html: script,
  };
}

export const signUp =
  '<script type="text/javascript" src="https://answeringlegal.formstack.com/forms/js.php/rs_get_plans_and_pricing?nomodernizr=1&no_style=1"></script><noscript><a href="https://answeringlegal.formstack.com/forms/rs_get_plans_and_pricing" title="Online Form">Online Form - RS Get Pricing Form</a></noscript>';

export const getPricing =
  '<script type="text/javascript" src="https://answeringlegal.formstack.com/forms/js.php/rs_get_plans_and_pricing?nomodernizr=1&no_style=1&no_style_strict=1"></script><noscript><a href="https://answeringlegal.formstack.com/forms/rs_get_plans_and_pricing" title="Online Form">Online Form - RS Get Pricing Form</a></noscript><div style="text-align:right; font-size:x-small;"><a href="http://www.formstack.com?utm_source=jsembed&utm_medium=product&utm_campaign=product+branding&fa=h,3791375" title="Powered by Formstack">Powered by Formstack</a></div>';
