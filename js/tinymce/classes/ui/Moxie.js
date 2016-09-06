define("tinymce/ui/Moxie", [
    "tinymce/ui/TextBox"
], function(TextBox) {
    "use strict";

    return TextBox.extend({
        init: function(settings) {
            var self = this;
            self._super(settings);

            self.on('click', function(e) {
                moxman.browse({
                    path: 		'/user',
                    insert: 	true,
                    title: 		'File manager',
                    leftpanel: 	false,
                    multiple: 	false,
                    view: 		'files',
                    oninsert: function(args) {
                        var path = [];
                        args.files.each(function(file) {
                            path.push(file.meta.relative_url);
                        });

                        self.getEl().value = path.join(',');
                    }
                });
            });

            self.addClass('moxie-input');
        }
    });
});