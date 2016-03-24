import $ from 'jquery';
require('../../vendor/holder.js');
module.exports = require('../../src/js/uikit.js');

requestAnimationFrame(function () {

    var $select = $('<select><option value="">- Select Test -</option></select>').css('margin', '20px 0'), $optgroup;

    $.each({

        Base: ['base'],
        Elements: ['typography', 'list', 'description-list', 'table', 'form', 'button'],
        Common: ['alert', 'badge', 'close', 'icon', 'label'],
        Navigation: ['nav', 'navbar', 'subnav', 'breadcrumb', 'pagination', 'tab'],
        Layout: ['section', 'container', 'grid', 'card'],
        JavaScript: ['accordion', 'drop', 'dropdown', 'modal', 'offcanvas', 'scrollspy', 'smooth-scroll', 'sticky', 'switcher', 'toggle'],
        Utilities: ['align', 'animation', 'column', 'cover', 'flex', 'height-expand', 'height-viewport', 'inverse', 'margin', 'padding', 'position', 'text', 'utility', 'visibility', 'width'],
        Components: ['form-advanced', 'tooltip']

    }, function (group, tests) {

        $optgroup = $('<optgroup label="' + group + '"></optgroup>').appendTo($select);

        tests.forEach(function (name) {
            $optgroup.append('<option value="' + name + '.html">' + name.charAt(0).toUpperCase() + name.slice(1) + '</option>');
        });

    });

    $select.on('change', function () {
        if ($select.val()) {
            var base = '../' + document.querySelector('script[src*="test.js"]').getAttribute('src').replace('js/test.js', '');
            location.href = base + 'tests/' + $select.val();
        }
    }).val(location.pathname.split('/').pop());

    $('body').prepend($('<div class="uk-form uk-container"></div>').prepend($select));

});
