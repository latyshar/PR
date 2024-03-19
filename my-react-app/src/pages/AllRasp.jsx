import React from 'react'
import Navbar from '../components/Navbar';
import '../table.css';
import '../App.css';
import Check from '../components/Check';

function AllRasp() {
  return (    
      <div className="center"> 

    <Navbar/>
    <Check />
      
        <div id="timeText1">
        <div id="timeText11" className='table-box' style={{   }}>
        <p className='upercase4'>Понедельник</p>
                            <div id='myElement1' className='upercaseall'> Нечетная неделя</div>
                            <table className="color1"> 
      
                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование ПР. (26.02, 25.03, 22.04, 20.05)</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td data-label="№&nbsp;">7</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование ПР. (26.02, 25.03, 22.04, 20.05)</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                        </tbody>
                            </table>
                            </div>
      
                            <div id="timeText12" className='table-box' style={{   }}>
                            <div id='myElement2' className='upercaseall'> Четная неделя</div>
                            <table className="color1"> 
      
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Предмет</th>
          <th scope="col">Кабинет</th>
          <th scope="col">Время</th>
        </tr>
      </thead>
      <tbody>
                      <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Физика ЛЕКЦ.</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          </tbody>
    </table>
                              </div>
      
      
        </div>
     
            <div id="timeText2" className='kvadrat'>
      
            <div id="timeText21" className='table-box' style={{   }}>
                <p className='upercase4'>Вторник</p>
                            <div id='myElement3' className='upercaseall'> Нечетная неделя</div>
                            <table className="color1"> 
      
                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Медиадизайн (27.02, 26.03, 23.04, 21.05)</td>
                            <td data-label="Кабинет&nbsp;">332</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                          <td data-label="№&nbsp;">7</td>
                            <td data-label="Предмет&nbsp;"><br/>Медиадизайн (27.02, 26.03, 23.04, 21.05)</td>
                            <td data-label="Кабинет&nbsp;">332</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                      
                        </tbody>
                            </table>
                            </div>
      
                            <div id="timeText22" className='table-box' style={{   }}>
                            <div id='myElement4' className='upercaseall'> Четная неделя</div>
                            <table className="color2"> 
      
                                    <thead>
                                      <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Предмет</th>
                                        <th scope="col">Кабинет</th>
                                        <th scope="col">Время</th>
                                      </tr>
                                    </thead>
                                    
                                    <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Иностранный яз.</td>
                            <td data-label="Кабинет&nbsp;">104</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Иностранный яз.</td>
                            <td data-label="Кабинет&nbsp;">104</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                              </table>
                              </div>
      
            </div>
      
                <div id="timeText3">
                <div id="timeText31" className='table-box' style={{   }}>
                <p className='upercase4'>Среда</p>
                            <div id='myElement5' className='upercaseall'> Нечетная неделя</div>
                            <table className="color2"> 
      
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Предмет</th>
          <th scope="col">Кабинет</th>
          <th scope="col">Время</th>
        </tr>
      </thead>
      
      <tbody>
<tr>
<td data-label="№&nbsp;">6</td>
<td data-label="Предмет&nbsp;"><br/>Физика ЛАБ</td>
<td data-label="Кабинет&nbsp;">029</td>
<td data-label="Время&nbsp;">18:30 - 20:00</td>
</tr>
</tbody>
</table>
                            </div>
      
                            <div id="timeText32" className='table-box' style={{   }}>
                            <div id='myElement6' className='upercaseall'> Четная неделя</div>
                            <table className="color2"> 
      
                                    <thead>
                                      <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Предмет</th>
                                        <th scope="col">Кабинет</th>
                                        <th scope="col">Время</th>
                                      </tr>
                                    </thead>
                                    
                                    <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">331</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                              </table>
                              </div>
      
                </div>
      
                    <div id="timeText4" className='kvadrat'>
      
                    <div id="timeText41" className='table-box' style={{   }}>
                    <p className='upercase4'>Четверг</p>
                            <div id='myElement7' className='upercaseall'> Нечетная неделя</div>
                            <table className="color1"> 
      
                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Математика ПР.</td>
                            <td data-label="Кабинет&nbsp;">117</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика ПР.</td>
                            <td data-label="Кабинет&nbsp;">117</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                            </table>
                            </div>
      
                            <div id="timeText42" className='table-box' style={{   }}>
                            <div id='myElement8' className='upercaseall'> Четная неделя</div>
                            <div className='upercase3'>Занятий нет</div>
                              </div>
      
                        <div id="timeText5" >
      
                        <div id="timeText51" className='table-box' style={{   }}>
                        <p className='upercase4'>Пятница</p>
                            <div id='myElement9' className='upercaseall'> Нечетная неделя</div>
                            <div className='upercase3'>Занятий нет</div>
                            </div>
      
                            <div id="timeText52" className='table-box' style={{   }}>
                            <div id='myElement10' className='upercaseall'> Четная неделя</div>
                            <table className="color2"> 
      
                                    <thead>
                                      <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Предмет</th>
                                        <th scope="col">Кабинет</th>
                                        <th scope="col">Время</th>
                                      </tr>
                                    </thead>
                                    
                                    <tbody>
                          <tr>
                            <td data-label="№&nbsp;">6</td>
                            <td data-label="Предмет&nbsp;"><br/>Программирование ЛЕК. (09.02, 22.03, 05.04, 03.05)</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Программирование ЛЕК. (09.02, 22.03, 05.04, 03.05)</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                              </table>
                              </div>
      
      
                        </div>
      
                            <div id="timeText6" className='kvadrat'> 
                            <div id="timeText61" className='table-box' style={{   }}>
                            <p className='upercase4'>Суббота</p>
                            <div id='myElement11' className='upercaseall'> Нечетная неделя</div>
                            <table className="color1"> 
      
                              <thead>
                                <tr>
                                  <th scope="col">№</th>
                                  <th scope="col">Предмет</th>
                                  <th scope="col">Кабинет</th>
                                  <th scope="col">Время</th>
                                </tr>
                              </thead>
                              <tbody>
                          <tr>
                            <td data-label="№&nbsp;">2</td>
                            <td data-label="Предмет&nbsp;"><br/>Философия ПР. (02.03, 30.03, 27.04, 25.05)</td>
                            <td data-label="Кабинет&nbsp;">120</td>
                            <td data-label="Время&nbsp;">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">3</td>
                            <td data-label="Предмет &nbsp;"><br/>Философия ПР. (02.03, 30.03, 27.04, 25.05)</td>
                            <td data-label="Кабинет&nbsp;">120</td>
                            <td data-label="Время&nbsp;">11:40 - 13:05</td>
                          </tr>
                    
                        </tbody>
                            </table>
                            </div>
      
                            <div id="timeText62" className='table-box' style={{   }}>
                            <div id='myElement12' className='upercaseall'> Четная неделя</div>
                            <table className="color2"> 
      
                                    <thead>
                                      <tr>
                                        <th scope="col">№</th>
                                        <th scope="col">Предмет</th>
                                        <th scope="col">Кабинет</th>
                                        <th scope="col">Время</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                          <tr>
                            <td data-label="№&nbsp;">2</td>
                            <td data-label="Предмет&nbsp;"><br/>Математика ЛЕК</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">3</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика ЛЕк</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">11:40 - 13:05</td>
                          </tr>

                          <tr>
                            <td scope="row" data-label="№&nbsp;">4</td>
                            <td data-label="Предмет &nbsp;"><br/>Философия ЛЕК.</td>
                            <td data-label="Кабинет&nbsp;">116</td>
                            <td data-label="Время&nbsp;">13:45 - 15:10</td>
                          </tr>
                      
                        </tbody>
                              </table>
                              </div>
                            </div>
                            </div>
                                </div> 
      
  )
}

export default AllRasp;