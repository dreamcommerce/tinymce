define("tinymce/ui/Colorpicker", [
    "tinymce/ui/TextBox",
    "tinymce/ui/DomUtils"
], function(TextBox, DomUtils) {
    "use strict";

    return TextBox.extend({

        init: function(settings) {
            var self = this;
            self._super(settings);
        },

        renderHtml: function() {
            var self = this, id = self._id, settings = self.settings, value = self.encode(self._value, false), extraAttrs = '';

            if (self.disabled()) {
                extraAttrs += ' disabled="disabled"';
            }

            return '<input style="position: absolute" type="text" id="' + id + '" class="colorpicker ' + self.classes() + '" value="' + value + '" hidefocus="1"' + extraAttrs + ' />';
        },

        postRender: function() {
            var self = this;

            DomUtils.on(self.getEl(), 'change', function(e) {
                self.fire('change', e);
            });
            (function() {
                Shop.instances.RWD.fireEventModules('elements.add', self, 'ColorPickerContainer');
            }).delay(10);

            return self._super();
        },

    });
});