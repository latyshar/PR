import React from 'react'
import Check from '../components/Check';
import TimeDisplay from '../components/TimeDisplay';
import '../table.css';
import '../App.css';
import Navbar from '../components/Navbar';

function Home () {
  return (

<div className="center"> 
<Navbar/>
<Check />
  <TimeDisplay /> 
 

  <div id="timeText1" style={{ display: 'none' }}>
  <div id="timeText11" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Русс. яз. и культура речи</td>
                            <td data-label="Кабинет&nbsp;">116</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                    
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText12" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
                      <div className='upercase3'>Занятий нет.</div>
                        </div>


  </div>

      <div id="timeText2" style={{ display: 'none'}}>

      <div id="timeText21" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Русс. яз. и культура речи</td>
                            <td data-label="Кабинет&nbsp;">008</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                   
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText22" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
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
                            <td data-label="Кабинет&nbsp;">103</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Иностранный яз.</td>
                            <td data-label="Кабинет&nbsp;">103</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>

      </div>

          <div id="timeText3" style={{ display: 'none'  }}>
          <div id="timeText31" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
                      <div className='upercase3'>Занятий нет.</div>
                      </div>

                      <div id="timeText32" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
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
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Введение в медиадизайн</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>

          </div>

              <div id="timeText4" style={{ display: 'none' }}>

              <div id="timeText41" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Комп. графика</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText42" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Математика</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика</td>
                            <td data-label="Кабинет&nbsp;">308</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>

              </div>

                  <div id="timeText5" style={{ display: 'none' }}>

                  <div id="timeText51" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Основы рос. государства</td>
                            <td data-label="Кабинет&nbsp;">116</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Основы рос. государства</td>
                            <td data-label="Кабинет&nbsp;">116</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText52" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
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
                            <td data-label="Предмет&nbsp;"><br/>Введение в медиадизайн</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">18:30 - 20:00</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">7</td>
                            <td data-label="Предмет &nbsp;"><br/>Введение в медиадизайн</td>
                            <td data-label="Кабинет&nbsp;">126</td>
                            <td data-label="Время&nbsp;">20:10 - 21:40</td>
                          </tr>
                          
                      
                        </tbody>
                        </table>
                        </div>


                  </div>

                      <div id="timeText6" className='table-container' style={{ display: 'none' }}> 
                      <div id="timeText61" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Четная неделя</div>
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
                            <td data-label="№&nbsp;">1</td>
                            <td data-label="Предмет&nbsp;"><br/>Информационные технологии</td>
                            <td data-label="Кабинет&nbsp;">224</td>
                            <td data-label="Время&nbsp;">10:05 - 11:30</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">2</td>
                            <td data-label="Предмет &nbsp;"><br/>Информационные технологии</td>
                            <td data-label="Кабинет&nbsp;">224</td>
                            <td data-label="Время&nbsp;">11:40 - 13:05</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№ ">&nbsp;3</td>
                            <td data-label="Предмет&nbsp;"><br/>История медиадизайна</td>
                            <td data-label="Кабинет&nbsp;">107</td>
                            <td data-label="Время&nbsp;">13:45 - 15:10</td>
                          </tr>
                      
                        </tbody>
                      </table>
                      </div>

                      <div id="timeText62" className='table-box' style={{ display: 'none' }}>
                      <div id='myElement' className='upercase'> Нечетная неделя</div>
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
                            <td data-label="№&nbsp;">5</td>
                            <td data-label="Предмет&nbsp;"><br/>Математика</td>
                            <td data-label="Кабинет&nbsp;">227</td>
                            <td data-label="Время&nbsp;">15:20 - 16:45</td>
                          </tr>
                          <tr>
                            <td scope="row" data-label="№&nbsp;">6</td>
                            <td data-label="Предмет &nbsp;"><br/>Математика</td>
                            <td data-label="Кабинет&nbsp;">227</td>
                            <td data-label="Время&nbsp;">16:55 - 18:20</td>
                          </tr>
                  
                      
                        </tbody>
                        </table>
                        </div>
                      </div>

                          <div id="timeText7" style={{ display: 'none' }}>
                          <div className='upercase3'>Занятий нет.</div>
                          </div> 
                          </div> 
  )
}

export default Home