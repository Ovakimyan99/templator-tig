import {tag} from './index'
{
    const pattern = '<div>';
    const div = tag(pattern);

    div('<d').next('iv').next('>');
}

{
    const pattern = ['<', /\d/, /\d/, /\d/, '>'];
    const div = tag(pattern);

    div('<d').next('iv').next('>');
}

{
    const isVChars = (char: string) => 'div'.includes(char);
    const pattern = ['<', 'd', /i/, isVChars, '>'];
    const div = tag(pattern);

    div('<d').next('iv').next('>');
}

{
    const pattern = ['<div>'];
    const div = tag(pattern);

    // expect throw Error
    div('<d').next('vi');
}
