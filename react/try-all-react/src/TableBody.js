import React from 'react';

const TableBody = (props) => {
  console.log(props)
  const element = 
    props.characterData.map((row, index) => {
      return (
        <tr key={index}> 
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <a 
              className="btn btn=primary" 
              href="javascript:;" 
              onClick={() => props.removeCharacter(index)}>删除</a>
          </td>
        </tr>
      )
    });
  return (
    <tbody>{element}</tbody>
  )
}

export default TableBody;