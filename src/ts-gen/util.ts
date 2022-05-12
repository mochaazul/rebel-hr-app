import ts from "typescript";

export function membersMatch(first: { kind: any; name: { text: any; }; type: { kind: ts.SyntaxKind; elementType: { kind: any; }; }; }, second: { kind: any; name: { text: any; }; type: { kind: ts.SyntaxKind; elementType: { kind: any; }; }; }) {
    if (first.kind !== second.kind) {
        return false;
    }
    if (first.name.text !== second.name.text) {
        return false;
    }
    if (first.type.kind !== second.type.kind) {
        return false;
    }
    if (first.type.kind === ts.SyntaxKind.ArrayType && second.type.kind === ts.SyntaxKind.ArrayType) {
        if (first.type.elementType.kind !== second.type.elementType.kind) {
            return false;
        }
    }
    return true;
}

export function isEmptyArrayType(member: { type: { kind: ts.SyntaxKind; elementType: { kind: ts.SyntaxKind; }; }; }) {
    if (member.type.kind === ts.SyntaxKind.ArrayType) {
        if (member.type.elementType.kind === ts.SyntaxKind.AnyKeyword) {
            return true;
        }
    }
    return false;
}